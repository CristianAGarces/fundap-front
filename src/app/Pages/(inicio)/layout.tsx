import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FundapMacoe",
  keywords: [
    "FundapMacoe",
    "Fundación de mujeres afrodescendientes",
    "Derechos de las mujeres",
    "Empoderamiento femenino",
    "Colombia",
    "Organización social",
    "Mujeres afrodescendientes",
    "Desarrollo comunitario",
    "Igualdad de género",
    "Solidaridad",
    "Inclusión social",
    "Derechos humanos",
  ],
  description:
    "FundapMacoe es una organización dedicada a la promoción y defensa de los derechos de las mujeres afrodescendientes y otras etnias en Colombia.",
  authors: [
    {
      name: "FundapMacoe",
      url: "https://fundapmacoe.org",
    },
  ],
  creator: "FundapMacoe",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/Logo.png",
  },
  openGraph: {
    title: "FundapMacoe",
    description:
      "FundapMacoe es una organización dedicada a la promoción y defensa de los derechos de las mujeres afrodescendientes y otras etnias en Colombia.",
    url: "https://fundapmacoe.org",
    siteName: "FundapMacoe",
    images: [
      {
        url: "https://fundapmacoe.org/Logo.png",
        width: 1200,
        height: 630,
        alt: "Logo FundapMacoe",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
