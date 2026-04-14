"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

export default function ProductGallery() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  // --- YENİ: URL'deki "hash" değişimini dinleyip kategoriyi otomatik değiştiren sistem ---
  useEffect(() => {
    const handleHashChange = () => {
      // URL'deki # işaretini at ve kelimeyi al (örn: "device" veya "cartridge")
      const hash = window.location.hash.replace("#", "");
      // Eğer geçerli bir kategoriyse, onu aktif et
      if (["device", "cartridge", "all"].includes(hash)) {
        setActiveCategory(hash);
      }
    };

    // Sayfa yüklendiğinde ve hash değiştiğinde tetikle
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // İlk girişte kontrol et

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // JSON dosyasındaki 'category' değerleriyle (device, cartridge) tam eşleşmesi için ID'leri güncelledik
  const categories = [
    { id: "all", tr: "TÜMÜ", en: "ALL" },
    { id: "device", tr: "CİHAZLAR", en: "DEVICES" },
    { id: "cartridge", tr: "TEREA & HEETS", en: "TEREA & HEETS" }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => {
        const pCat = product.category?.toLowerCase() || "";
        return pCat === activeCategory.toLowerCase();
      });

  // Butona tıklandığında hem state'i hem de URL'yi günceller
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    window.location.hash = categoryId;
  };

  return (
    <div id="product-gallery" className="w-full flex flex-col items-center py-12 px-6 scroll-mt-10">
      
      {/* Kategori Butonları */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 border-b border-white/5 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`text-[10px] md:text-xs font-black tracking-[0.3em] uppercase transition-all duration-300 relative pb-2
              ${activeCategory === cat.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"}
            `}
          >
            {language === "tr" ? cat.tr : cat.en}
            {activeCategory === cat.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* Ürün Izgarası */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-zinc-500 text-[10px] tracking-[0.4em] text-center py-20 uppercase">
            {language === "tr" ? "Bu kategoride ürün bulunamadı." : "No products in this category."}
          </p>
        )}
      </div>
    </div>
  );
}