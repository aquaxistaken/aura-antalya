"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="flex justify-between items-center py-8 px-8 md:px-16 bg-white w-full">
      {/* Marka İsmi - Kalın, büyük ve harf aralıkları açık */}
      <h1 className="text-xl md:text-2xl font-black tracking-[0.4em] uppercase text-black">
        AURA
      </h1>
      
      {/* Dil Seçici - Hover durumunda altı zarifçe çizilen animasyon */}
      <button 
        onClick={toggleLanguage}
        className="group relative text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase transition-colors hover:text-black"
      >
        {language === "tr" ? "EN" : "TR"}
        <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-black scale-x-0 transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100"></span>
      </button>
    </header>
  );
}