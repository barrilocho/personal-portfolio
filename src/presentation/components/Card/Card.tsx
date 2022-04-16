import { FC } from 'react';

interface Props {
  title?: string;
}

const Card: FC<Props> = ({ title, children }) => {
  return (
    <section className="relative flex flex-col p-6 pt-4 bg-white justify-center w-full shadow-sm max-w-sm sm:box-border sm:basis-auto sm:h-auto  sm:rounded-md md:m-6">
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
