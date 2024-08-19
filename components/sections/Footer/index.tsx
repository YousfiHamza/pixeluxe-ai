import Image from 'next/image';
import Link from 'next/link';

export async function Footer() {
  return (
    <footer className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-slate-600 px-4 py-7 md:mt-12 md:flex-row md:px-8">
      <Link href="/">
        <Image src="/assets/logo.png" alt="logo" width={159} height={25} />
        <span className="sr-only">Pixeluxe.ai Home Page</span>
      </Link>
      <nav aria-label="Footer" className="w-full">
        <ul className="text-theme mb-3 flex w-full justify-evenly gap-4 font-medium sm:mb-0 md:justify-end">
          <li className="inline-flex min-h-11 items-center hover:underline">
            <Link href="/dashboard/home">Get Started</Link>
          </li>
          <li className="inline-flex min-h-11 items-center hover:underline">
            <Link href="#features">Features</Link>
          </li>
          <li className="inline-flex min-h-11 items-center hover:underline">
            <Link href="https://hamza.yousfi.dev" target="_blank">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
