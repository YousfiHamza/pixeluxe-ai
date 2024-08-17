import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
