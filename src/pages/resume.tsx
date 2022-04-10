import Image from 'next/image';
import {
  FaCode,
  FaEnvelope,
  FaMapPin,
  FaStarOfLife,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { DescriptionField } from '../presentation/components/DescriptionField/DescriptionField';
import experience from '../../public/experience.json';
import JobExperience from '../presentation/components/JobExperience/JobExperience';

const ResumePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 w-full">
        <div className="m-2 p-6 pt-16 bg-white flex flex-col justify-center  shadow-md w-full max-w-sm rounded-md">
          <div className="flex justify-center self-center rounded-full border-2 border-solid border-gray-300">
            <Image
              className="rounded-full "
              src="/profile_picture.jpeg"
              alt="profile_picture"
              height={128}
              width={128}
            />
          </div>
          <h1 className="self-center mt-3 lf-center text-2xl font-medium text-black">
            Alejandro barrios
          </h1>
          <a
            rel="noreferrer"
            target="_blank"
            className="mt-1 self-center text-blue-500 underline "
            href="https://twitter.com/barrilocho"
          >
            @barrilocho
          </a>
          <div className="flex items-center self-center mt-3">
            <FaCode className="mr-2" />
            <h3 className=" text-sm font-medium text-gray-900">
              Full-stack developer
            </h3>
          </div>
          <DescriptionField
            text="Zapopan, Jalisco, Mexico"
            icon={<FaMapPin />}
          />
          <DescriptionField
            text="7 años de experiencia"
            icon={<FaStarOfLife />}
          />
          <DescriptionField>
            <FaEnvelope className="mr-2 text-gray-500 " />
            <a
              href="mailto:barrilocho@gmail.com"
              className="font-medium text-gray-500"
            >
              Correo electronico
            </a>
          </DescriptionField>
          <DescriptionField
            link="https://linkedin.com/in/barrilocho"
            icon={<FaLinkedinIn />}
          ></DescriptionField>
          <DescriptionField
            link="https://github.com/barrilocho"
            icon={<FaGithub />}
          ></DescriptionField>
          <div className="">
            <h3 className="font-medium my-2 py-2 border-b-2 border-gray-200 border-dashed">
              Experiencia
            </h3>
          </div>
          {experience.map((item, index) => (
            <JobExperience
              key={item.companyId}
              companyLogo={`/img/companies/${item.companyLogo}`}
              companyName={item.companyName}
              workTime={item.workTime}
              jobTitle={item.jobTitle}
              place={item.place}
            />
          ))}
        </div>
        <div className="bg-white m-2 p-4 flex flex-col self-start justify-center shadow-md w-full rounded-md border-2 border-black border-solid">
          <h3 className="font-medium pb-2 mb-2 border-b-2 border-gray-200 border-dashed">
            LENGUAGES
          </h3>
          <div className="flex flex-wrap">
            <div className="flex w-fit mr-2 mt-2 py-2 px-4 rounded-3xl bg-blue-50">
              <Image
                src="/profile_picture.jpeg"
                alt="logo js"
                width={25}
                height={25}
                className="rounded-full"
              />
              <h5 className="pl-2">Javascript</h5>
            </div>
            <div className="flex w-fit mr-2 mt-2 py-2 px-4 rounded-3xl bg-blue-50">
              <Image
                src="/profile_picture.jpeg"
                alt="logo js"
                width={25}
                height={25}
                className="rounded-full"
              />
              <h5 className="pl-2">HTML/CSS</h5>
            </div>
            <div className="flex w-fit mr-2 mt-2 py-2 px-4 rounded-3xl bg-blue-50">
              <Image
                src="/profile_picture.jpeg"
                alt="logo js"
                width={25}
                height={25}
                className="rounded-full"
              />
              <h5 className="pl-2">Ruby</h5>
            </div>
            <div className="flex w-fit mr-2 mt-2 py-2 px-4 rounded-3xl bg-blue-50">
              <Image
                src="/profile_picture.jpeg"
                alt="logo js"
                width={25}
                height={25}
                className="rounded-full"
              />
              <h5 className="pl-2">TypeScript</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
