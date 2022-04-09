import { FC, ReactNode } from 'react';

interface Props {
  text?: string;
  icon?: () => ReactNode;
  link?: string;
}

export const DescriptionField: FC<Props> = ({ children, text, icon, link }) => {
  return (
    <div>
      {children ? (
        children
      ) : (
        <div>
          <>{icon ? icon() : null}</>
          {link ? (
            <a target="_blank" rel="noreferrer" href={link}>
              {text ? text : link}
            </a>
          ) : (
            text
          )}
        </div>
      )}
    </div>
  );
};
