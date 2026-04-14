"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image"; 

export default function ProductCard({ product }: { product: any }) {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentData = product[language];
  const phoneNumber = "905551234567"; // Kendi numaranla değiştirmeyi unutma

  const messageTemplate = language === "tr" 
    ? `Merhaba, ${currentData.name} için güncel fiyat bilgisi alabilir miyim?`
    : `Hello, could I get pricing info for ${currentData.name}?`;

  const whatsappLink = `https://wa.me/${905384075786}?text=${encodeURIComponent(messageTemplate)}`;
  const buttonText = language === "tr" ? "FİYAT BİLGİSİ AL" : "ASK FOR PRICE";

  const imageList = product.images || [product.image];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <div className="group flex flex-col items-center p-0 transition-all duration-500">
      
      {/* Görsel Alanı - Boyutları sabitleyen ve hizalayan ana kutu */}
      <div className="w-full aspect-[4/5] bg-[#F5F5F7] mb-8 flex items-center justify-center relative overflow-hidden p-8 md:p-12">
        
        {/* Zarif metalik yansıma efekti */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-0 pointer-events-none"></div>
        
        {/* Resim İskeleti - Farklı boyutlardaki resimleri merkeze sabitleyen iç kutu */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          <Image 
            src={imageList[currentImageIndex]} 
            alt={`${currentData.name} - ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={product.id === "iluma-prime"}
            className="object-contain transition-all duration-500 z-10 drop-shadow-sm group-hover:scale-105"
          />
        </div>

        {/* Slider Kontrolleri (Sadece birden fazla görsel varsa görünür) */}
        {imageList.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md text-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white active:scale-90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md text-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white active:scale-90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {/* İnce Çizgi Göstergeler (Dots) */}
            <div className="absolute bottom-6 z-20 flex space-x-1.5">
              {imageList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-[2px] transition-all duration-500 rounded-full ${
                    currentImageIndex === index ? "w-6 bg-black" : "w-3 bg-black/10"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Ürün Metin Alanı */}
      <h3 className="text-sm md:text-base font-medium text-black uppercase tracking-[0.2em] mb-3 text-center px-4">
        {currentData.name}
      </h3>
      <p className="text-[11px] md:text-xs text-zinc-400 text-center mb-10 font-light max-w-[90%] leading-relaxed h-12 overflow-hidden">
        {currentData.description}
      </p>

      {/* Minimalist CTA Butonu */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full text-center py-4 px-6 bg-black text-white text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98]"
      >
        {buttonText}
      </a>
    </div>
  );
}