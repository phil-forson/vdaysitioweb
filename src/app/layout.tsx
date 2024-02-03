import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Valenties Day Website",
  description: "An app built for your loved ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className + " min-h-screen "}>
          <Nav />
          <div className="flex justify-center items-center p-24">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
