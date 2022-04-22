import { FC } from 'react';

interface Props {
  title?: string;
  cssClass?: string;
}

const Card: FC<Props> = ({ title, children, cssClass }) => {
  return (
    <section
      className={`flex flex-col p-6 pt-4 bg-white dark:bg-slate-800 justify-center w-full shadow-sm max-w-lg sm:box-border sm:basis-auto sm:h-auto sm:max-w-xs sm:rounded-md md:mx-6 ${cssClass}`}
    >
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
