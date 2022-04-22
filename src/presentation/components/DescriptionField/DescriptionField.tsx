import { FC, ReactNode } from 'react';

interface Props {
  text?: string;
  icon?: ReactNode;
  link?: string;
}

export const DescriptionField: FC<Props> = ({ children, text, icon, link }) => {
  return (
    <div className="flex items-center my-2">
      {children ? (
        children
      ) : (
        <div className="text-blue-500 flex items-center font-medium ">
          <div className="mr-2 text-gray-500 dark:text-gray-100 ">
            {icon ? icon : null}
          </div>
          {link ? (
            <a target="_blank" rel="noreferrer" href={link}>
              {text ? text : link}
            </a>
          ) : (
            <h4 className="font-medium text-gray-500 dark:text-gray-100 ">
              {text}
            </h4>
          )}
        </div>
      )}
    </div>
  );
};
