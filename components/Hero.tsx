"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slaytta dönecek olan 3 ana kategori
  const slides = [
    {
      id: "devices",
      image: "/images/ıqoslayt.png", 
      tr: { 
        tag: "YENİ NESİL DENEYİM",
        title: "IQOS ILUMA SERİSİ", 
        subtitle: "Temiz, külsüz ve benzersiz premium tasarım." 
      },
      en: { 
        tag: "NEXT GEN EXPERIENCE",
        title: "IQOS ILUMA SERIES", 
        subtitle: "Clean, ashless, and unique premium design." 
      }
    },
    {
      id: "terea",
      image: "/images/tereaslayt.png",
      tr: { 
        tag: "SMARTCORE İNDÜKSİYON",
        title: "TEREA HARMANLARI", 
        subtitle: "Iluma serisi için özel tasarlanmış zengin aromalar." 
      },
      en: { 
        tag: "SMARTCORE INDUCTION",
        title: "TEREA BLENDS", 
        subtitle: "Rich aromas specially designed for the Iluma series." 
      }
    },
    {
      id: "heets",
      image: "/images/heetslayt.png",
      tr: { 
        tag: "ZAMANSIZ KLASİK",
        title: "HEETS KOLEKSİYONU", 
        subtitle: "Geleneksel ısıtma deneyiminden vazgeçemeyenler için." 
      },
      en: { 
        tag: "TIMELESS CLASSIC",
        title: "HEETS COLLECTION", 
        subtitle: "For those who cannot give up the traditional heating experience." 
      }
    }
  ];

  // Slaytın her 4 saniyede bir otomatik dönmesini sağlayan sistem
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4000 milisaniye = 4 saniye
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F7]">
      
      {/* Slayt İçerikleri */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        const currentData = slide[language];

        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Metin Alanı */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 z-20">
              <h2 className="text-[9px] md:text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase mb-4">
                {currentData.tag}
              </h2>
              <h1 className="text-3xl md:text-5xl font-black tracking-[0.15em] uppercase text-black mb-4">
                {currentData.title}
              </h1>
              <p className="text-xs md:text-sm text-zinc-500 font-light tracking-wide max-w-sm">
                {currentData.subtitle}
              </p>
            </div>

            {/* Görsel Alanı */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full mt-8 md:mt-0 flex items-center justify-center pointer-events-none">
              <div className={`relative w-full h-full transition-transform duration-[2000ms] ease-out ${isActive ? "scale-100" : "scale-95"}`}>
                <Image 
                  src={slide.image} 
                  alt={currentData.title}
                  fill
                  priority={index === 0}
                  className="object-contain p-4 md:p-12 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Alt Göstergeler (Dots) */}
      <div className="absolute bottom-6 md:bottom-10 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 rounded-full ${
              currentSlide === index ? "w-8 bg-black" : "w-3 bg-black/20 hover:bg-black/40"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}