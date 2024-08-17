'use client';
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import usePrefersReducedMotion from '@/lib/hooks/usePrefersReducedMotion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AnimatedContent({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { y: 0, opacity: 0.25 });
        return;
      }

      gsap.fromTo(
        container.current,
        { y: 50, opacity: 0.25 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: 'top bottom-=40%',
            toggleActions: 'play pause resume reverse',
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
