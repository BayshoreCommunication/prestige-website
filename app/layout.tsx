import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

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
  title: "prestigeweb",
  description: "prestige website",
  // metadataBase: new URL(""),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/", //opengraph-image.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"

    >
      <body className={`${montserrat.variable} ${sansation.variable}`}>
        <Providers>
          <Navbar />
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
