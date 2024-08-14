import { navLinks } from '@/constants';
import { getAllImages } from '@/lib/actions/image.actions';
import Image from 'next/image';
import Link from 'next/link';

export default async function Dashboard({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading text-slate-200">
          Unleash Your Creative Vision With{' '}
          <span className="text-shadow-lg text-white">Pixeluxe</span>
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map(link => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center group flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-slate-100 p-4 group-hover:bg-slate-300">
                <Image
                  src={link.icon}
                  alt="image"
                  width={24}
                  height={24}
                  className="group-hover:brightness-200"
                />
              </li>
              <p className="p-14-medium text-center text-slate-100 group-hover:text-white lg:text-slate-300">
                {link.label}
              </p>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
