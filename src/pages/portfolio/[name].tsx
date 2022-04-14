import type { GetStaticProps, NextPage } from 'next';

interface Props {
  name: string;
  project: {
    name: string;
  };
}

const ProjectPage: NextPage<Props> = ({ name }) => {
  return (
    <div className="background-ecosan w-100 h-100">
      <h1 className="text-3xl font-bold">Project {name} page</h1>
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
