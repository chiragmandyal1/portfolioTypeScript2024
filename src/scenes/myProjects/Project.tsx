type Props = {
  name: string;
  link?: string;
  description?: string;
  image: string;
};

function Project({ name, link, description, image }: Props) {
  const overlayStyles =
    "p-5 absolute z-30 flex h-[380px] w-[480px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90";
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[480px]">
      <a href={`${link}`} target="_blank" rel="noopener noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{description}</p>
        </div>
        <img alt={`${image}`} src={image} />
      </a>
    </li>
  );
}

export default Project;
