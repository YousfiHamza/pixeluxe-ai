import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

import { Collection } from '@/components/shared/Collection';
import { FirstTimeModal } from '@/components/shared/FirstTimeModal';

import { navLinks } from '@/constants';
import { getAllImages } from '@/lib/actions/image.action';
import { getUserById } from '@/lib/actions/user.actions';

export default async function Dashboard({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';
  const { userId } = auth();

  if (!userId) redirect('/');

  const [images, user] = await Promise.all([
    getAllImages({ page, searchQuery, limit: 6 }),
    getUserById(userId),
  ]);

  return (
    <>
      {user?.isFirstTime && <FirstTimeModal />}
      <section className="home">
        <h1 className="home-heading font-inter text-slate-200">
          Unleash Your Creative Vision With{' '}
          <span className="font-poppins font-bold text-white text-shadow-lg">
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
      {images && (
        <section className="sm:mt-12">
          <Collection
            hasSearch
            images={images?.data}
            totalPages={images?.totalPage}
            page={page}
          />
        </section>
      )}
    </>
  );
}
