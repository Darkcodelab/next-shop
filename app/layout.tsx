import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

// components
import NextAuthProvider from "@/components/next-auth-provider";
import Header from "@/components/shared/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={cn("min-h-screen font-poppins", poppins.variable)}>
          <Header />
          {children}
        </body>
      </html>
    </NextAuthProvider>
  );
}
