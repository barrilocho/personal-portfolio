import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  imageUrl: string;
  shortTitle: string;
  description: string;
  tools: string[];
  onClick: () => void;
}

const ProjectCard: FC<Props> = ({
  name,
  imageUrl,
  shortTitle,
  description,
  tools,
  onClick = () => {},
}) => {
  return (
    <section
      key={name}
      className="group w-full min-w-[320px]  md:max-w-xs rounded-md shadow-md my-4 sm:mr-4 dark:bg-slate-700"
      onClick={() => {
        onClick();
      }}
    >
      <div className="m-0 rounded-t-md cursor-pointer  relative bg-black/70 dark:bg-slate-500 overflow-hidden shadow-md h-48 w-full outline outline-white/50 outline-2 outline-offset-[-8px]">
        <Image
          layout="fill"
          src={imageUrl}
          alt="project"
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-125"
        />
        <h2 className="absolute bottom-3 font-semibold left-4 text-2xl text-white">
          {shortTitle}
        </h2>
      </div>
      <div className="p-4 h-52 flex flex-col justify-between">
        <p className="text-gray-900 dark:text-slate-200">{description}</p>
        <ul className="flex flex-wrap items-end">
          {tools.map((technology: string, index: number) => (
            <li
              key={technology}
              className="text-sm font-bold text-gray-400 dark:text-slate-400"
            >
              {technology}
              {index !== tools.length - 1 && <>&nbsp;{'•'}&nbsp;</>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ProjectCard;
