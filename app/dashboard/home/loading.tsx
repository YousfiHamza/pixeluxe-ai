import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '@/constants';

export default async function Dashboard() {
  return (
    <>
      <section className="home">
        <h1 className="home-heading font-inter text-slate-100">
          Unleash your creative vision with{' '}
          <span className="font-poppins text-6xl font-bold text-white text-shadow-lg">
            Pixeluxe
          </span>
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map(link => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center group flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-slate-100 p-4 shadow-lg shadow-black group-hover:bg-slate-300">
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
