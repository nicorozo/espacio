import type { Metadata } from "next";
import { Hind, Libre_Franklin } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "Event Photography & Video Services in Wrocław – Espacio.pl",
  description:
    "Professional photography and video services for weddings, corporate events, and celebrations in Wrocław",
  openGraph: {
    title: "Espacio",
    description: "Professional Photography and Video services",
    url: "https://espacio.pl",
    siteName: "Espacio",
    images: [
      {
        url: "https://espacio.pl/services_espacio.png", // Must be an absolute URL
        width: 800,
        height: 800,
      },
      {
        url: "https://espacio.pl/services_espacio.png", // Must be an absolute URL
        width: 1800,
        height: 1800,
        alt: "Espacio ",
      },
    ],
    videos: [
      {
        url: "https://espacio.pl/intro.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${hind.className} ${libre_franklin.variable}`}>
        <Header></Header>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
      <GoogleTagManager gtmId="G-81B0L1LQL1" />
    </html>
  );
}
