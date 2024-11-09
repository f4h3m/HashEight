import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const urbanist = localFont({
  src: [
    {
      path: "./fonts/Urbanist-Regular.woff",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/Urbanist-Medium.woff",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Urbanist-SemiBold.woff",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/Urbanist-Bold.woff",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "HashEight | Nextjs Template",
  description: "HashEight Nextjs Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
