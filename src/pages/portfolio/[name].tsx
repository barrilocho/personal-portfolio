import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

interface Props {
  name: string;
  project: {
    name: string;
  };
}

const ProjectPage: NextPage<Props> = ({ name = 'ecosan' }) => {
  return (
    <div className={`bg-${name} bg-cover bg-fixed bg-center bg-no-repeat`}>
      <div className="p-5">
        <h1 className="text-6xl font-bold text-center text-white">
          Ecosan App
        </h1>
        <div className="mt-10 flex flex-row">
          <Image
            className="absolute t-10 l-1"
            src={`/img/portfolio/${name}/${name}1.png`}
            height={'800px'}
            width={'1000px'}
            alt={`${name} portfolio 1`}
          />
          <Image
            className="absolute t-10 l-1"
            src={`/img/portfolio/${name}/${name}2.png`}
            height={'800px'}
            width={'1000px'}
            alt={`${name} portfolio 2`}
          />
        </div>
        <p className="pt-16 mb-12 text-white text-xl w- text-justify">
          Una aplicacion hecha con react native, permite conocer en tiempo real
          el status de una empresa, para llevar un mejor control interno y
          control de inventario. Ayuda a analizar y contrastar einformacion para
          mejorar el desempeño de la operación
        </p>
        <Image
          className="mb-12"
          src={`/img/portfolio/${name}/${name}3.png`}
          height={'1000px'}
          width={'500px'}
          alt={`${name} portfolio 1`}
        />
        <Image
          className="w-full"
          src={`/img/portfolio/${name}/${name}4.png`}
          height={'100%'}
          width="100%"
          alt={`${name} portfolio 1`}
        />
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { name } = params as { name: string };
//   const project = {};
//   return {
//     props: {
//       name,
//       project,
//     },
//   };
// };

export default ProjectPage;
