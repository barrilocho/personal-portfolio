import { useRouter } from 'next/router';
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
import projects from '../../public/portfolio.json';
import JobExperience from '../presentation/components/JobExperience/JobExperience';
import Skill from '../presentation/components/Skill/Skill';
import Card from '../presentation/components/Card/Card';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import ProjectCard from '../presentation/components/ProjectCard/ProjectCard';

const ResumePage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme, setTheme]);

  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col items-center sm:items-stretch sm:justify-around md:justify-center sm:flex-wrap sm:flex-row lg:flex-row lg:justify-center dark:bg-slate-900">
        <Card cssClass="lg:w-1/3 lg:m-1 sm:animate-fadeInUp">
          <div className="flex justify-center self-center rounded-full border-2 border-solid border-gray-300">
            <Image
              className="rounded-full "
              src="/img/profile_picture.jpeg"
              alt="profile_picture"
              height={128}
              width={128}
            />
          </div>
          <h1 className="self-center mt-3 lf-center text-2xl font-medium text-black dark:text-white ">
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
            <h3 className=" text-sm font-medium text-gray-900 dark:text-gray-100 ">
              Full-stack web developer
            </h3>
          </div>
          <DescriptionField
            text="7 years of experience"
            icon={<FaStarOfLife />}
          />
          <DescriptionField>
            <FaEnvelope className="mr-2 text-gray-500 dark:text-gray-100 " />
            <a
              href="mailto:barrilocho@gmail.com"
              className="font-medium text-gray-500 dark:text-gray-100"
            >
              Email
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
          <Card
            cssClass="hidden lg:shadow-none lg:block lg:mx-0 lg:p-0 lg:mt-4"
            title="EXPERIENCE"
          >
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
        </Card>
        <Card cssClass="lg:hidden sm:animate-fadeInUp" title="EXPERIENCE">
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
        <div className="flex flex-col justify-center items-center w-full md:mx-4 lg:w-2/3 lg:m-1 lg:self-start lg:max-w-3xl sm:animate-fadeInDown">
          <Card
            cssClass="sm:!max-w-none sm:mt-2 lg:mt-0 lg:animate-fadeInDown"
            title="LANGUAGES"
          >
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
          <Card
            cssClass="sm:!max-w-none sm:mt-2 lg:animate-fadeInDown"
            title="TOOLS"
          >
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
          <Card
            cssClass="sm:!max-w-none sm:mt-2  lg:animate-fadeInDown"
            title="PROJECTS (WIP)"
          >
            <div className="flex w-full overflow-auto">
              {projects.map((item) => (
                <ProjectCard
                  key={item.name}
                  name={item.name}
                  imageUrl={item.mini}
                  description={item.description_en}
                  shortTitle={item.shortTitle_en}
                  tools={item.tools}
                  onClick={() => {}}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
