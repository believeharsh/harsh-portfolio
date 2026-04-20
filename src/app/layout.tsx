import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk } from "next/font/google";

import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Dahiya - Software Engineer Portfolio",
  description:
    "Portfolio of Harsh Dahiya, a software engineer specializing in full stack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${hanken.variable} ${geistMono.variable} selection:bg-orange font-sans antialiased selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
