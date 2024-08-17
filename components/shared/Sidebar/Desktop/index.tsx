'use client';

import { navLinks } from '@/constants';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/logo.png" alt="logo" width={180} height={50} />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map(link => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive
                      ? 'bg-purple-gradient text-slate-100'
                      : 'text-theme-100'
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map(link => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive
                      ? 'bg-purple-gradient text-white'
                      : 'text-slate-700 dark:text-slate-400'
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <SignedIn>
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton showName />
              </li>
            </SignedIn>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
