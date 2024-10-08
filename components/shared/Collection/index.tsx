'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Search } from '@/components/ui/Search';

import { transformationTypes } from '@/constants';
import { IImage } from '@/lib/database/models/image.model';
import { formUrlQuery } from '@/lib/utils';

import { CollectionProps } from './types';

export function Collection({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: CollectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === 'next' ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: 'page',
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <div className="collection-heading">
        <h2 className="h2-bold text-theme-300 font-inter md:-mt-6">
          {/* TODO: find a better way please, here u are using the "hasSearch" value to differenciate between HomePage edits and ProfilePage edits */}
          {hasSearch ? <>Creativity Hub:</> : <>Recent Edits:</>}
        </h2>
        {hasSearch && <Search />}
      </div>

      {images.length > 0 ? (
        <ul className="collection-list">
          {images.map((image, idx) => (
            <Card image={image} key={image.publicId} />
          ))}
        </ul>
      ) : (
        <div className="collection-empty">
          <p className="p-16-medium text-theme italic">Empty List ...</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full">
            <Button
              disabled={Number(page) <= 1}
              className="collection-btn"
              onClick={() => onPageChange('prev')}
            >
              <PaginationPrevious className="hover:bg-transparent hover:text-white" />
            </Button>

            <p className="flex-center p-16-medium w-fit flex-1">
              {page} / {totalPages}
            </p>

            <Button
              className="button w-32 bg-purple-gradient bg-cover text-white"
              onClick={() => onPageChange('next')}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className="hover:bg-transparent hover:text-white" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}

const Card = ({ image }: { image: IImage }) => {
  return (
    <li>
      <Link
        href={`/dashboard/transformations/${image._id}`}
        className="collection-card"
      >
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading="lazy"
          className="h-52 w-full rounded-[10px] object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
        <div className="flex-between group">
          <p className="p-20-semibold text-theme mr-3 line-clamp-1 p-1 capitalize">
            {image.title}
          </p>
          <Image
            src={`/assets/icons/${
              transformationTypes[
                image.transformationType as TransformationTypeKey
              ].icon
            }`}
            alt={image.title}
            width={24}
            height={24}
            className="mr-1 transform group-hover:fill-red-500"
          />
        </div>
      </Link>
    </li>
  );
};
