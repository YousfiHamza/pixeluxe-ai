'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import StarGrid from '@/components/ui/StarGrid';

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
      className="relative flex min-h-[66vh] w-full flex-col items-center overflow-hidden py-4 md:py-14"
      ref={container}
    >
      <StarGrid />
      <h1 className="hero__heading text-balance text-center text-4xl font-medium text-slate-600 opacity-0 dark:text-slate-300 md:text-7xl">
        Transform Your Images Instantly with AI&apos;s Magic, Powered by{' '}
        <span className="text-shadow-lg-purple text-theme-300 font-poppins font-bold uppercase">
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
      <Link
        href="/dashboard"
        className="hero__button relative inline-flex h-fit w-fit rounded-full border border-purple-500 bg-purple-500/10 px-4 py-2 text-2xl text-purple-700/75 opacity-0 outline-none ring-purple-300 transition-all after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-purple-400 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-fuchsia-600 hover:border-purple-700/50 hover:text-fuchsia-500 after:hover:bg-opacity-25 focus:ring-2 dark:border-blue-100/20 dark:bg-blue-200/10 dark:text-blue-200 hover:dark:border-blue-200/60 hover:dark:text-fuchsia-500"
      >
        Try for FREE !
      </Link>
    </section>
  );
}
