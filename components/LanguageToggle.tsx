"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  // Senin Context dosyanla tam uyumlu çalışan kısım:
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 md:top-10 md:right-10 z-[9999] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-wider text-xs md:text-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] group"
      aria-label="Dil Değiştir / Change Language"
    >
      {/* Mevcut dil TR ise butonda EN yazsın, EN ise TR yazsın */}
      {language === "tr" ? "EN" : "TR"}
      
      {/* Hover efekti - PC'de üzerine gelince çıkar */}
      <span className="absolute top-16 right-0 bg-white text-black px-3 py-1.5 rounded-md text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap tracking-widest uppercase">
        {language === "tr" ? "Switch to English" : "Türkçe'ye Geç"}
      </span>
    </button>
  );
}