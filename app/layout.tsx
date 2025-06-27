// app/layout.tsx

import type { Metadata } from "next";
// These imports are correct!
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// The imported GeistSans and GeistMono objects are all you need.
// Delete the old, incorrect function calls.

export const metadata: Metadata = {
  title: "Aditya's Portfolio",
  description: "A portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Best practice: Apply the font variables to the <html> tag.
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* Apply other body-specific classes here */}
      <body className="antialiased">{children}</body>
    </html>
  );
}