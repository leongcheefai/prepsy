import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { NavLinks } from "./ui/nav-links";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prepsy",
  description: "An application to help you get recipe recommendations based on your ingredients.",
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
        <div className="container mx-auto h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <section>
            <NavLinks />
            <main>{children}</main>
          </section>
        </div>
      </body>
    </html>
  );
}
