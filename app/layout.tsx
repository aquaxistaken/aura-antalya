import type { Metadata } from "next";
import { Inter } from "next/font/google"; // İstersen premium bir font ile değiştireceğiz
import "./globals.css";
import LanguageToggle from "@/components/LanguageToggle"; // veya "../components/LanguageToggle"

// 1. Az önce oluşturduğumuz Provider'ı içeri aktarıyoruz
import { LanguageProvider } from "../context/LanguageContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AURA | Premium",
  description: "Yeni nesil deneyim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        
        {/* 2. Tüm siteyi (children) LanguageProvider içine alıyoruz! */}
        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}