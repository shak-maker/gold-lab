import type { Metadata } from "next";
import "./globals.css";
import { INTRO_LOADER_CLASS, INTRO_SEEN_ATTR, INTRO_STORAGE_KEY } from "@/lib/intro";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hide the loader before first paint on repeat visits, and for no-JS visitors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem(${JSON.stringify(INTRO_STORAGE_KEY)}))document.documentElement.setAttribute(${JSON.stringify(INTRO_SEEN_ATTR)},"")}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`.${INTRO_LOADER_CLASS}{display:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

