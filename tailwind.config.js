module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        ecosan: "url('/img/portfolio/ecosan/bg_ecosan.svg')",
        arca: "url('/img/portfolio/arca/bg_arca.svg')",
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(110%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.2s ease-in-out 1',
        fadeInDown: 'fadeInDown 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
