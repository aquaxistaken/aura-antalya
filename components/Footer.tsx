"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const disclaimerTR = "AURA Antalya bağımsız bir perakende satıcısıdır. Sitemizde adı geçen IQOS, Iluma, Terea ve Heets markaları ve logoları kendi tescilli sahiplerine aittir. AURA Antalya'nın bu markalarla resmi bir ortaklığı, sponsorluğu veya yetkili satıcılık anlaşması bulunmamaktadır.";
  
  const disclaimerEN = "AURA Antalya is an independent retailer. The IQOS, Iluma, Terea, and Heets trademarks and logos mentioned on our site belong to their respective registered owners. AURA Antalya has no official partnership, sponsorship, or authorized dealer agreement with these brands.";

  return (
    <footer className="w-full bg-[#F5F5F7] py-12 px-6 mt-20 border-t border-black/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo / Marka İsmi */}
        <h2 className="text-lg md:text-xl font-black tracking-[0.3em] text-black mb-6">
          AURA
        </h2>

        {/* Yasal Feragatname Metni */}
        <p className="text-[9px] md:text-[10px] text-zinc-400 font-light leading-relaxed max-w-3xl mb-8">
          {language === "tr" ? disclaimerTR : disclaimerEN}
        </p>

        {/* Telif Hakkı (Copyright) */}
        <p className="text-[10px] text-zinc-500 tracking-widest uppercase">
          © {new Date().getFullYear()} AURA ANTALYA. {language === "tr" ? "TÜM HAKLARI SAKLIDIR." : "ALL RIGHTS RESERVED."}
        </p>
        
      </div>
    </footer>
  );
}