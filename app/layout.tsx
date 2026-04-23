import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inkwise — Design your tattoo. Before the needle.",
  description:
    "AI tattoo designer with flash from actual shops. See it on your skin before you commit.",
  openGraph: {
    title: "Inkwise — Design your tattoo. Before the needle.",
    description:
      "AI tattoo designer with flash from actual shops. See it on your skin before you commit.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=Inkwise&accent=red&category=Consumer%20AI",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=Inkwise&accent=red&category=Consumer%20AI",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-neutral-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
