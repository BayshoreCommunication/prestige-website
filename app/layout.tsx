import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";



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
      <body className="font-sansation">
        <Providers>
          <Navbar />
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
