import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Scroll from "@/components/global/scroll";

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '400', variable: "--font-space" });
const dmSans = DM_Sans({ subsets: ['latin'], weight: '400', variable: "--font-dm" })

export const metadata: Metadata = {
  title: "Voice Clone",
  description: "Voice Clone next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-space relative w-full h-screen overflow-auto touch-auto", spaceMono.variable, dmSans.variable)}>
        <Scroll>
          {children}
        </Scroll>
      </body>
    </html>
  );
}
