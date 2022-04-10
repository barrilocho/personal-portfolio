import Image from 'next/image';
import { FC } from 'react';

interface Props {
  institutionName: string;
  title: string;
  dateDescription: string;
  institutionLogo: string;
}

export const EducationField: FC<Props> = ({
  institutionName,
  institutionLogo,
  dateDescription,
  title,
}) => {
  return (
    <div className="flex my-2">
      <div className="mr-4 pt-1">
        <Image
          src={institutionLogo}
          width={60}
          height={60}
          alt={`${institutionName} logo`}
          className="rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold mt-0 text-gray-600">{institutionName}</h4>
        <h4 className="font-medium text-gray-500">{title}</h4>
        <h5 className="text-sm italic text-gray-500">{dateDescription}</h5>
      </div>
    </div>
  );
};

export default EducationField;
