import Image from 'next/image';
import {
  FaCode,
  FaEnvelope,
  FaMapPin,
  FaStarOfLife,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { AiFillGitlab } from 'react-icons/ai';
import { DescriptionField } from '../presentation/components/DescriptionField/DescriptionField';
import experience from '../../public/experience.json';
import languages from '../../public/languages.json';
import tools from '../../public/tools.json';
import JobExperience from '../presentation/components/JobExperience/JobExperience';
import Skill from '../presentation/components/Skill/Skill';

const ResumePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 h-screen w-full">
        <div className="m-2 p-6 pt-16 bg-white flex flex-col justify-center  shadow-sm w-full max-w-sm rounded-md">
          <div className="flex justify-center self-center rounded-full border-2 border-solid border-gray-300">
            <Image
              className="rounded-full "
              src="/img/profile_picture.jpeg"
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
          <DescriptionField
            link="https://gitlab.com/barrilocho"
            icon={<AiFillGitlab />}
          ></DescriptionField>
        </div>
        <div className="flex flex-col m-2 p-6 pt-4 bg-white justify-center shadow-sm w-full max-w-sm rounded-md">
          <h3 className="font-medium my-2 pb-2 border-b-2 border-gray-200 border-dashed">
            EXPERIENCE
          </h3>
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
        <div className="flex-column w-full">
          <div className="bg-white m-2 p-4 shadow-sm w-auto rounded-md">
            <h3 className="font-medium pb-2 mb-2 border-b-2 border-gray-200 border-dashed">
              LENGUAGES
            </h3>

            <div className="flex flex-wrap">
              {languages.map((item) => (
                <Skill
                  key={item.name}
                  name={item.name}
                  rounded
                  src={`/img/languages/${item.languageLogo}`}
                />
              ))}
            </div>
          </div>
          <div className="bg-white m-2 p-4  w-auto rounded-md">
            <h3 className="font-medium pb-2 mb-2 border-b-2 border-gray-200 border-dashed">
              TOOLS
            </h3>
            <div className="flex flex-wrap">
              {tools.map((item) => (
                <Skill
                  key={item.name}
                  rounded
                  name={item.name}
                  src={`/img/tools/${item.languageLogo}`}
                />
              ))}
            </div>
          </div>
          <div className="bg-white m-2 p-4 shadow-sm w-auto rounded-md">
            <h3 className="font-medium pb-2 mb-2 border-b-2 border-gray-200 border-dashed">
              PROJECTS
            </h3>

            <div className="flex flex-wrap">
              <div className="cursor-pointer group relative bg-black/70 overflow-hidden shadow-md h-80 w-52 rounded-md outline outline-white/50 outline-2 outline-offset-[-8px]">
                <Image
                  layout="fill"
                  src="/img/profile_picture.jpeg"
                  alt="project"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
