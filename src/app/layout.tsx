import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Augmenté — AI-Powered Digital Services for Small Business",
    template: "%s | Augmenté",
  },
  description:
    "One person. The best AI tools. Full-agency output for your small business — websites, ads, and social that actually work.",
  openGraph: {
    title: "Augmenté — AI-Powered Digital Services for Small Business",
    description:
      "One person. The best AI tools. Full-agency output for your small business — websites, ads, and social that actually work.",
    url: "https://augmente.co",
    siteName: "Augmenté",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Augmenté — Websites That Get Found",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augmenté — AI-Powered Digital Services for Small Business",
    description:
      "One person. The best AI tools. Full-agency output for your small business.",
    images: ["/opengraph-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
