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
  // TODO: Rename This Component to SectionHeader to avoid confusion with Page Header
  return (
    <div>
      <div className="flex items-center gap-2">
        {logo && (
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image src={logo} alt={`${title}'s logo`} fill />
          </div>
        )}
        <h2 className="text-theme text-3xl font-bold capitalize sm:text-5xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="p-16-regular text-theme mt-2 font-inter">{subtitle}</p>
      )}
    </div>
  );
};

export default Header;
