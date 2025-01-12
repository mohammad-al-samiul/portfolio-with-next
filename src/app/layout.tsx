import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/lib/Providers";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Samiul | Software Engineer ",
  description: "Explore Al Samiul's journey as a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={`${robotoMono.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
