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
import Card from '../presentation/components/Card/Card';

const ResumePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center  w-full">
        <Card>
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
        </Card>
        <Card title="EXPERIENCE">
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
        </Card>
        <div className="flex-column w-full">
          <Card title="LANGUAGES">
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
          </Card>
          <Card title="TOOLS">
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
          </Card>
          <Card title="PROJECTS">
            <div className="flex flex-wrap">
              {tools.map((item) => (
                <div
                  key={item.name}
                  className="m-0 cursor-pointer group relative bg-black/70 overflow-hidden shadow-md h-40 w-40 outline outline-white/50 outline-2 outline-offset-[-8px]"
                >
                  <Image
                    layout="fill"
                    src="/img/profile_picture.jpeg"
                    alt="project"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-125"
                  />
                  <h2 className="absolute bottom-8 left-4 text-lg text-white">
                    hola
                  </h2>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
