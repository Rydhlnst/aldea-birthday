import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import NavbarBirthday from "@/components/layout/Navbar";
import BrutalismMusicButton from "@/components/BrutalismMusic";
import FooterSection from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "For Aldeaa",
  description: "Created by ur friendd, Riyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress/>
        <NavbarBirthday/>
        <BrutalismMusicButton/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
