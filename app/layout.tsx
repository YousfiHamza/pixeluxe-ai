import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/Providers/ThemeProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

import { cn } from '@/lib/utils';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pixeluxe-ai.vercel.app'),
  title: 'Pixeluxe AI',
  description:
    'Pixeluxe is your ultimate AI-powered image enhancement tool, offering services like background removal, object recoloring, generative fill, and image restoration. Elevate your photos with precision, creativity, and ease—perfect for designers, photographers, and creatives looking to transform their visuals effortlessly. Discover the power of AI to perfect every pixel with Pixeluxe.',
  keywords: [
    'AI image editing',
    'Background removal',
    'Image restoration',
    'Object recoloring',
    'Generative fill',
    'Photo enhancement',
    'AI photo tools',
    'Image editing software',
    'Creative design tools',
    'Pixeluxe AI',
    'Photo retouching',
    'AI-powered image editing',
    'Online image editor',
    'Enhance photo quality',
    'AI background remover',
  ],
  openGraph: {
    images: '/seo/pixeluxe-og-image.jpg',
    title: 'Pixeluxe AI',
    description:
      'Pixeluxe is your ultimate AI-powered image enhancement tool, offering services like background removal, object recoloring, generative fill, and image restoration. Elevate your photos with precision, creativity, and ease—perfect for designers, photographers, and creatives looking to transform their visuals effortlessly. Discover the power of AI to perfect every pixel with Pixeluxe.',
  },
  twitter: {
    images: '/seo/pixeluxe-og-image.jpg',
    title: 'Pixeluxe AI',
    description:
      'Pixeluxe is your ultimate AI-powered image enhancement tool, offering services like background removal, object recoloring, generative fill, and image restoration. Elevate your photos with precision, creativity, and ease—perfect for designers, photographers, and creatives looking to transform their visuals effortlessly. Discover the power of AI to perfect every pixel with Pixeluxe.',
  },
  applicationName: 'Pixeluxe',
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
            'bg-slate-200 font-poppins antialiased dark:bg-slate-900',
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
