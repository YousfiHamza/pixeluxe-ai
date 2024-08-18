'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import StarGrid from '@/components/ui/StarGrid';
import { ButtonLink } from '@/components/shared/ButtonLink';

import usePrefersReducedMotion from '@/lib/hooks/usePrefersReducedMotion';

export function HeroSection() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          '.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow',
          { opacity: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

      tl.fromTo(
        '.hero__heading',
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 },
      );

      tl.fromTo(
        '.hero__body',
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=0.6',
      );
      tl.fromTo(
        '.hero__button',
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        '-=0.8',
      );
      tl.fromTo(
        '.hero__glow',
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        '-=1',
      );
    },
    { scope: container },
  );

  return (
    <section
      id="hero"
      className="relative mb-6 flex w-full flex-col items-center overflow-hidden py-6 md:py-14 lg:min-h-[66vh]"
      ref={container}
    >
      <StarGrid />
      <h1 className="hero__heading text-balance text-center text-4xl font-medium text-slate-600 opacity-0 dark:text-slate-300 md:text-7xl">
        Transform Your Images Instantly with AI&apos;s Magic, Powered by{' '}
        <span className="text-theme-300 font-poppins font-bold uppercase text-shadow-lg-purple">
          Pixeluxe
        </span>{' '}
        .
      </h1>
      <p className="text-theme-100 hero__heading my-4 text-center text-3xl opacity-0 md:my-8 md:text-5xl">
        Effortlessly Edit, Enhance, and Innovate!
      </p>
      <div className="hero__body text-theme mx-auto mb-4 max-w-md text-center opacity-0 md:max-w-lg">
        Unlock the Power of AI to Redefine Your Images: Seamlessly Remove
        Backgrounds, Change Colors, and Generate Stunning Visuals with Just a
        Click.
      </div>
      <Link href="/dashboard/home">
        <ButtonLink className="hero__button opacity-0">
          Try for FREE !
        </ButtonLink>
      </Link>
    </section>
  );
}
