"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ProductCard({ product }: { product: any }) {
  const { language } = useLanguage();
  const [currentImg, setCurrentImg] = useState(0); 
  const [touchStart, setTouchStart] = useState(0); 
  
  const phoneNumber = "905384075786"; // Senin numaran
  
  const content = product[language] || product["tr"];
  const whatsappMessage = `Merhaba, ${content.name} hakkında fiyat bilgisi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // --- İleri ve Geri Alma Fonksiyonları ---
  const handleNext = (e?: React.MouseEvent) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (!product.images || product.images.length <= 1) return;
    setCurrentImg((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (!product.images || product.images.length <= 1) return;
    setCurrentImg((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // --- Dokunmatik Kaydırma (Swipe) Motoru ---
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (!product.images || product.images.length <= 1) return; 

    if (touchStart - touchEnd > 50) handleNext(); // Sola kaydır
    if (touchStart - touchEnd < -50) handlePrev(); // Sağa kaydır
  };

  return (
    <div className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 h-full relative">
      
      {/* Görsel Alanı */}
      <div 
        className="aspect-[4/3] w-full bg-[#111] relative overflow-hidden flex items-center justify-center p-4 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {product.images && product.images.length > 0 ? (
          <>
            {/* Aktif Fotoğraf */}
            <img 
              src={product.images[currentImg]} 
              alt={content.name}
              className="w-full h-full object-contain transition-all duration-700 pointer-events-none"
            />
            
            {product.images.length > 1 && (
              <>
                {/* Sol Ok Butonu (Sadece Masaüstünde ve Hover'da) */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:flex hidden items-center justify-center bg-black/40 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black z-10"
                  aria-label="Önceki Görsel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Sağ Ok Butonu (Sadece Masaüstünde ve Hover'da) */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:flex hidden items-center justify-center bg-black/40 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black z-10"
                  aria-label="Sonraki Görsel"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Fotoğraf Geçiş Noktaları (Dots) - İŞTE BURASI DEĞİŞTİ! */}
                {/* opacity-100 (Mobilde hep görünür), md:opacity-0 (Bilgisayarda gizli), md:group-hover:opacity-100 (Bilgisayarda üzerine gelince görünür) */}
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {product.images.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImg(idx);
                      }}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentImg === idx ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-zinc-800 text-[8px] tracking-[0.4em]">AURA ANTALYA</span>
        )}
      </div>

      {/* İçerik Alanı */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="text-white text-lg font-bold tracking-wider uppercase">
          {content.name}
        </h3>
        
        {product.aromas && (
          <div className="flex flex-wrap gap-2">
            {product.aromas.map((aroma: string, i: number) => (
              <span key={i} className="bg-white/5 border border-white/10 text-[9px] text-zinc-400 px-2 py-1 rounded-full uppercase tracking-widest italic flex items-center gap-1">
                {aroma}
              </span>
            ))}
          </div>
        )}

        <p className="text-zinc-500 text-[11px] leading-relaxed line-clamp-3 italic flex-grow">
          {content.description}
        </p>

        <div className="pt-4 mt-auto border-t border-white/5">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-black text-[10px] font-black px-4 py-3 hover:bg-[#25D366] hover:text-white transition-all duration-300 tracking-[0.2em] text-center uppercase"
          >
            {language === "tr" ? "FİYAT BİLGİSİ AL" : "GET PRICE INFO"}
          </a>
        </div>
      </div>
    </div>
  );
}