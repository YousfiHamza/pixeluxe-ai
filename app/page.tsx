import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-7xl px-4">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
