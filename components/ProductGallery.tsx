"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

export default function ProductGallery() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", tr: "TÜMÜ", en: "ALL" },
    { id: "device", tr: "CİHAZLAR", en: "DEVICES" },
    { id: "cartridge", tr: "TEREA&HEETS", en: "TEREA&HEETS" }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="w-full flex flex-col items-center py-16 px-6">
      
      {/* Kategori Filtre Butonları */}
      <div className="flex space-x-6 md:space-x-12 mb-20 border-b border-zinc-100 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-xs md:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 relative
              ${activeCategory === cat.id ? "text-black" : "text-zinc-400 hover:text-zinc-700"}
            `}
          >
            {language === "tr" ? cat.tr : cat.en}
            {activeCategory === cat.id && (
              <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-black"></span>
            )}
          </button>
        ))}
      </div>

      {/* Ürün Vitrini - Grid (Izgara) Düzeni */}
      {/* Mobilde: max-w-md ve grid-cols-1 (Tek sütun)
        Bilgisayarda: md:max-w-4xl ve md:grid-cols-2 (İki sütun yan yana) 
        md:gap-x-16: Bilgisayarda iki ürün arasındaki yatay boşluk
      */}
      <div className="w-full max-w-md md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-y-28 md:gap-x-16 transition-all duration-500">
        
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
        {/* Eğer kategoride ürün yoksa çıkacak mesaj (Izgaranın ortasında durması için col-span ayarı) */}
        {filteredProducts.length === 0 && (
          <p className="col-span-1 md:col-span-2 text-zinc-400 text-sm tracking-widest text-center mt-10">
            {language === "tr" ? "Yakında eklenecek." : "Coming soon."}
          </p>
        )}
        
      </div>
    </div>
  );
}