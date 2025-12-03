import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoldTest Lab - Precision Gold Testing You Can Trust",
  description: "Certified gold testing laboratory providing accurate purity analysis using advanced XRF spectrometry and chemical testing. Get professional reports within 24 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

