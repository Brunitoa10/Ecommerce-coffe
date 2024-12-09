import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const geistSans = Urbanist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Urbanist({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "El Rincon del cafe",
  description: "Welcome to my e-commerce from TechnologyAdvanceSolutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
