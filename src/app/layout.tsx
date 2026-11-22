import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, DM_Mono } from "next/font/google";
import NativeBridge from "@/components/NativeBridge";
import "@/styles/globals.scss";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = { title: "Syntrix", description: "Pay the people around you." };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#02050D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <NativeBridge />
        {children}
      </body>
    </html>
  );
}
