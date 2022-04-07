import Image from 'next/image';
import {
  FaCode,
  FaEnvelope,
  FaMapPin,
  FaStarOfLife,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
const ResumePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center space-x-4 w-full">
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
          <div className="flex items-center mt-6 my-2">
            <FaMapPin className="mr-2 text-gray-500 " />
            <h4 className="font-medium text-gray-500">
              Zapopan, Jalisco, México
            </h4>
          </div>{' '}
          <div className="flex items-center my-2">
            <FaStarOfLife className="mr-2 text-gray-500 " />
            <h4 className=" font-medium text-gray-500">
              7 años de experiencia
            </h4>
          </div>
          <div className="flex items-center my-2">
            <FaEnvelope className="mr-2 text-gray-500 " />
            <a
              href="mailto:barrilocho@gmail.com"
              className="font-medium text-gray-500"
            >
              Correo electronico
            </a>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 flex items-center font-medium my-2"
            href="https://linkedin.com/in/barrilocho"
          >
            <FaLinkedinIn className="mr-2 text-gray-500" />
            https://linkedin.com/in/barrilocho
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 flex items-center font-medium my-2"
            href="https://github.com/barrilocho"
          >
            <FaGithub className="mr-2 text-gray-500" />
            https://github.com/barrilocho
          </a>
          <div className="">
            <h3 className="font-medium my-2 py-2 border-b-2 border-gray-200 border-dashed">
              Experiencia
            </h3>
          </div>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={`experience-${index}`} className="flex my-2">
              <div className="mr-4 pt-1">
                <Image
                  src="/profile_picture.jpeg"
                  width={60}
                  height={60}
                  alt="Addika logo"
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold mt-0 text-gray-600">
                  Sr frontend developer
                </h4>
                <h4 className="font-medium text-gray-500">ADDIKA</h4>
                <h5 className="text-sm italic text-gray-500">
                  May 2021 - present
                </h5>
                <h5 className="text-sm italic text-gray-500">
                  Zapopan Jalisco, Mx
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="m-2 p-6 pt-16 bg-white flex flex-col justify-center shadow-md w-full rounded-md border-2 border-black border-solid">
          <div className="">
            <h3 className="font-medium my-2 py-2 border-b-2 border-gray-200 border-dashed">
              LENGUAGES
            </h3>
          </div>
          <div></div>
          <div className="flex w-fit py-2 px-4 rounded-3xl bg-blue-50">
            <Image
              src="/profile_picture.jpeg"
              alt="logo js"
              width={25}
              height={25}
              className="rounded-full"
            />
            <h5 className="pl-2">Javascript</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
