import Image from 'next/image';

const Header = ({
  title,
  subtitle,
  logo,
}: {
  title: string;
  subtitle?: string;
  logo?: string;
}) => {
  return (
    <div>
      <div className="flex gap-2">
        {logo && (
          <Image src={logo} alt={`${title}'s logo`} width={50} height={50} />
        )}
        <h2 className="text-theme text-5xl font-bold capitalize">{title}</h2>
      </div>
      {subtitle && (
        <p className="p-16-regular text-theme mt-2 font-inter">{subtitle}</p>
      )}
    </div>
  );
};

export default Header;
