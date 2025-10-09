import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap", // better loading performance
  variable: "--font-montserrat",
});

const sansation = localFont({
  src: [
    {
      path: "./fonts/Sansation-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Sansation-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sansation",
});

export const metadata: Metadata = {
  title: "PRESTIGE Medical & Physical Therapy",
  description:
    "Professional medical and physical therapy services with advanced treatment options and personalized care.",
  // metadataBase: new URL("https://prestigemedical.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: "PRESTIGE Medical & Physical Therapy",
    description:
      "Professional medical and physical therapy services with advanced treatment options and personalized care.",
    images: "/opengraph-image.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${sansation.variable}`}>
        <Providers>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
