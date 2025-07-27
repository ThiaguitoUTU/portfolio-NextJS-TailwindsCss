import type { Metadata } from "next";
import { Urbanist, } from "next/font/google"; // <- Importa ambas fuentes
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Thiaguito Dev 💻",
  description: "Landing page del portfolio de Thiaguito Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
