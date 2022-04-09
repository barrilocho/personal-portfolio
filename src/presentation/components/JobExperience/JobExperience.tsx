import Image from 'next/image';
import { FC } from 'react';

interface Props {
  companyName: string;
  jobTitle: string;
  workTime: string;
  companyLogo: string;
  place?: string;
}

const JobExperience: FC<Props> = ({
  companyLogo,
  companyName,
  workTime,
  jobTitle,
  place,
}) => {
  return (
    <>
      <div className="flex my-2">
        <div className="mr-4 pt-1">
          <Image
            src={companyLogo}
            width={60}
            height={60}
            alt={`${companyName} logo`}
            className="rounded-full"
          />
        </div>
        <div>
          <h4 className="font-bold mt-0 text-gray-600">{jobTitle}</h4>
          <h4 className="font-medium text-gray-500">{companyName}</h4>
          <h5 className="text-sm italic text-gray-500">{workTime}</h5>
          <h5 className="text-sm italic text-gray-500">{place}</h5>
        </div>
      </div>
    </>
  );
};

export default JobExperience;
