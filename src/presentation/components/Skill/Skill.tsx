import Image from 'next/image';
interface Props {
  name: string;
  src: string;
  rounded?: boolean;
}

const Skill = ({ name, src, rounded }: Props) => {
  return (
    <div className="flex flex-wrap">
      <div
        className={`flex w-fit mr-2 mt-2 py-2 px-4  bg-blue-50 ${
          rounded ? 'rounded-3xl' : ''
        }`}
      >
        <Image
          src={src}
          alt={`${name} logo`}
          width={25}
          height={25}
          className="rounded-full"
        />
        <h5 className="pl-2">{name}</h5>
      </div>
    </div>
  );
};

export default Skill;
