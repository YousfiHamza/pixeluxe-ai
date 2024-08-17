import AnimatedContent from './AnimatedContent';
import { FeatureCard } from './FeatureCard';

import { navLinks } from '@/constants';

export function FeaturesSection(): JSX.Element {
  return (
    <section id="features" className="relative mt-12">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <AnimatedContent className="opacity-25">
        <h2 className="text-shadow-lg-purple text-balance text-center text-5xl font-medium uppercase text-blue-950 dark:text-white md:text-8xl">
          Features
        </h2>
      </AnimatedContent>
      {navLinks.slice(1, 6).map((link, index) => (
        <FeatureCard
          key={link.id}
          {...link}
          position={index % 2 !== 0 ? 'left' : 'right'}
        />
      ))}
    </section>
  );
}
