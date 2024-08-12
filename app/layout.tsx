import type { Metadata } from "next";
import { IBM_Plex_Sans, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Imagify-ai",
  description: "AI powered image generator !",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-IBMPlex antialiased",
          IBMPlex.variable,
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
