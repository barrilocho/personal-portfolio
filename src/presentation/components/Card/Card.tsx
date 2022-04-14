import { FC } from 'react';

interface Props {
  title?: string;
}

const Card: FC<Props> = ({ title, children }) => {
  return (
    <section className="flex flex-col sm:m-2 p-6 pt-4 bg-white justify-center shadow-sm w-full max-w-sm sm:rounded-md">
      {title && (
        <header className="font-medium my-2 pb-2 border-b-2 border-gray-200 border-dashed">
          {title}
        </header>
      )}
      <>{children}</>
    </section>
  );
};
export default Card;
