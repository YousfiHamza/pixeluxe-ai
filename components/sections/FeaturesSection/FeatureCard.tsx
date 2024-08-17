'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { ButtonLink } from '@/components/shared/ButtonLink';

import { FeatureCardProps } from './types';

export function FeatureCard({
  label,
  icon,
  image,
  description,
  position,
}: FeatureCardProps) {
  const [openLightbox, setOpenLighbox] = useState(false);

  return (
    <div className="mt-8 grid items-center gap-6 rounded-xl border border-purple-100 bg-gradient-to-b from-slate-500/15 to-slate-500/5 p-6 backdrop-blur-sm dark:border-blue-50/20 dark:from-slate-50/15 dark:to-slate-50/5 md:mt-12 lg:grid-cols-3 lg:py-12 xl:gap-0">
      <div>
        <div className="flex items-center gap-2 md:mb-6">
          <div className="w-fit rounded-2xl bg-blue-900/50 p-1 dark:bg-blue-900/35">
            <Image
              src={icon}
              alt="coins"
              width={50}
              height={50}
              className="size-9 brightness-200 md:size-16"
            />
          </div>
          <div className="text-theme font-poppins text-2xl font-medium sm:text-4xl">
            {label}
          </div>
        </div>

        <div className="text-theme-100 relative my-2 max-w-xl font-inter text-sm sm:text-base lg:my-6">
          <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />
          {description}
        </div>

        <ButtonLink className="font-inter text-xl font-medium sm:text-2xl">
          <Link href="/dashboard">Try Now!</Link>
        </ButtonLink>
      </div>

      <Image
        src={image || ''}
        className={clsx(
          'w-full cursor-pointer rounded-xl opacity-90 shadow-2xl shadow-black lg:col-span-2 lg:pt-0',
          position === 'left'
            ? 'lg:order-1 xl:translate-x-[10%]'
            : 'lg:-order-1 xl:translate-x-[-10%]',
        )}
        alt={label || 'feature'}
        height={400}
        width={800}
        sizes="(max-width: 768px) 100vw, 50vw"
        onClick={() => setOpenLighbox(true)}
      />
      <Lightbox
        open={openLightbox}
        close={() => setOpenLighbox(false)}
        slides={[{ src: image || '' }]}
        styles={{
          navigationPrev: {
            display: 'none',
          },
          navigationNext: {
            display: 'none',
          },
        }}
      />
    </div>
  );
}
