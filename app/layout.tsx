import type { Metadata } from "next";
import { Hind, Libre_Franklin } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${hind.className} ${libre_franklin.variable}`}>
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
