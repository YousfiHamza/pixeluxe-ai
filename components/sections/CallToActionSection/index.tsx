import Link from 'next/link';
import { ButtonLink } from '@/components/shared/ButtonLink';

import PlainLogo from './PlainLogo';

export function CallToActionSection() {
  return (
    <section
      id="callToAction"
      className="text-theme relative flex flex-col items-center py-12 text-center font-medium"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-purple-500/50 blur-[160px] filter dark:bg-blue-500/50" />

      <div className="glass-container w-fit rounded-lg bg-gradient-to-b from-slate-400 to-slate-800 p-4 dark:from-slate-800 dark:to-slate-900 md:rounded-xl">
        <PlainLogo />
      </div>

      <div className="mt-8 max-w-xl text-balance font-inter text-5xl">
        AI-Powered Creativity for Image Perfection
      </div>

      <ButtonLink className="mt-6">
        <Link href="/dashboard/home">Learn More</Link>
      </ButtonLink>
    </section>
  );
}
