import type { GetStaticProps, NextPage } from 'next';

interface Props {
  name: string;
  project: {
    name: string;
  };
}

const ProjectPage: NextPage<Props> = ({ name = 'ecosan' }) => {
  return (
    <div className={`bg-${name} bg-fixed bg-center bg-no-repeat`}>
      <div className="p-5">
        <h1 className="text-6xl font-bold text-center text-white">
          Ecosan app
        </h1>
        <p className="pt-16 text-white text-xl w- text-justify">
          Una aplicacion hecha con react native, para el director de operaciones
          y los operadores de la empresa ecosan, la cual consiste en medir el
          rendimiento de
        </p>
        <p className="pt-16 text-white text-xl w- text-justify">
          Una aplicacion hecha con react native, para el director de operaciones
          y los operadores de la empresa ecosan, la cual consiste en medir el
          rendimiento de
        </p>
        <p className="pt-16 text-white text-xl w- text-justify">
          Una aplicacion hecha con react native, para el director de operaciones
          y los operadores de la empresa ecosan, la cual consiste en medir el
          rendimiento de
        </p>
        <p className="pt-16 text-white text-xl w- text-justify">
          Una aplicacion hecha con react native, para el director de operaciones
          y los operadores de la empresa ecosan, la cual consiste en medir el
          rendimiento de
        </p>
        <p className="pt-16 text-white text-xl w- text-justify">
          Una aplicacion hecha con react native, para el director de operaciones
          y los operadores de la empresa ecosan, la cual consiste en medir el
          rendimiento de
        </p>
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
