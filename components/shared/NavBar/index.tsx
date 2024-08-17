'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';
import clsx from 'clsx';
import { SignedIn, SignedOut } from '@clerk/nextjs';

import { Button } from '@/components/ui/CustomButton';

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src="/assets/logo.png" alt="logo" width={180} height={50} />
            <span className="sr-only">Pixeluxe.ai Home Page</span>
          </Link>
          {!open && (
            <button
              type="button"
              className="block p-2 text-3xl text-slate-900 dark:text-slate-100 md:hidden"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </button>
          )}
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(
            'fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end gap-4 bg-slate-200 pl-[10%] pr-[30%] pt-6 transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:bg-black md:hidden',
            open ? 'translate-x-[20%]' : 'translate-x-[100%]',
          )}
        >
          <div className="flex w-full items-center justify-between">
            <Image src="/assets/logo.png" alt="logo" width={120} height={50} />
            <button
              type="button"
              className="block p-2 text-3xl text-slate-900 dark:text-slate-200 md:hidden"
              aria-expanded={open}
              onClick={() => setOpen(false)}
            >
              <XIcon />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="mt-10 grid justify-items-end gap-6">
            <div className="text-theme hover:underline">
              <Link href="#features">Features</Link>
            </div>
            <div>
              <SignedOut>
                <Button
                  asChild
                  className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80"
                >
                  <Link href="/auth/sign-in">Login</Link>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button
                  asChild
                  className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          <li className="text-theme hover:underline">
            <Link href="#features">Features</Link>
          </li>
          <li>
            <SignedOut>
              <Button
                asChild
                className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80"
              >
                <Link href="/auth/sign-in">Login</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                asChild
                className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80"
              >
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </li>
        </ul>
      </div>
    </nav>
  );
}
