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

const ResumePage = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col items-center sm:items-stretch sm:justify-around md:justify-center sm:flex-wrap sm:flex-row lg:flex-row lg:justify-center">
        <Card cssClass="lg:w-1/3 lg:m-1">
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
              Full-stack web developer
            </h3>
          </div>
          <DescriptionField
            text="7 years of experience"
            icon={<FaStarOfLife />}
          />
          <DescriptionField>
            <FaEnvelope className="mr-2 text-gray-500 " />
            <a
              href="mailto:barrilocho@gmail.com"
              className="font-medium text-gray-500"
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
        <Card cssClass="lg:hidden" title="EXPERIENCE">
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
        <div className="flex flex-col justify-center items-center w-full md:mx-4 lg:w-2/3 lg:m-1 lg:self-start lg:max-w-3xl">
          <Card cssClass="sm:!max-w-none sm:mt-2 lg:mt-0" title="LANGUAGES">
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
          <Card cssClass="sm:!max-w-none sm:mt-2" title="TOOLS">
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
          <Card cssClass="sm:!max-w-none sm:mt-2" title="PROJECTS (WIP)">
            <div className="flex flex-wrap">
              {projects.map((item) => (
                <section
                  key={item.name}
                  className="group w-full md:max-w-xs rounded-md shadow-md mt-4 sm:mr-4"
                  onClick={() => {
                    router.push(`/portfolio/${item.companyName}`);
                  }}
                >
                  <div className="m-0 rounded-t-md cursor-pointer  relative bg-black/70 overflow-hidden shadow-md h-48 w-full outline outline-white/50 outline-2 outline-offset-[-8px]">
                    <Image
                      layout="fill"
                      src={`/img/portfolio/${item.companyName}/${item.mini}`}
                      alt="project"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-125"
                    />
                    <h2 className="absolute bottom-3 font-semibold left-4 text-2xl text-white">
                      {item.shortTitle_en}
                    </h2>
                  </div>
                  <div className="p-4 h-52 flex flex-col justify-between">
                    {/* <h3 className="my-2 text-2xl font-semibold text-blue-800">
                      {item.shortTitle_en}
                    </h3> */}
                    <p className="text-gray-900">{item.description_en}</p>
                    <ul className="flex flex-wrap items-end">
                      {item.tools.map((technology, index) => (
                        <li
                          key={technology}
                          className="text-sm font-bold text-gray-400"
                        >
                          {technology}
                          {index !== item.tools.length - 1 && (
                            <>&nbsp;{'•'}&nbsp;</>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
