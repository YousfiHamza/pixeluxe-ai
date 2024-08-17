import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/Providers/ThemeProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

import { cn } from '@/lib/utils';

import './globals.css';

export const metadata: Metadata = {
  title: 'Pixeluxe-ai',
  description: 'AI powered image generator !',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'bg-theme font-poppins antialiased',
            inter.variable,
            poppins.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeToggle />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
