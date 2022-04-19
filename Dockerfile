FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:16-alpine AS runner
Workdir /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S alexdev -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=alexdev:nodejs /app/.next/standalone ./
COPY --from=builder --chown=alexdev:nodejs /app/.next/static ./.next/static

USER alexdev

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
