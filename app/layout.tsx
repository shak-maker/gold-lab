import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ҮМСТ",
  description: "Үнэт металлын сорьц тогтоох лаборатори",
  icons: {
    icon: "/logo main.png",
    apple: "/logo main.png",
    shortcut: "/logo main.png",
  },
  openGraph: {
    images: ["/logo main.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo main.png"],
  },
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

