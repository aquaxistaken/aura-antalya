import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGallery from "../components/ProductGallery";
import FloatingWhatsApp from "../components/FloatingWhatsApp"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-black selection:text-white flex flex-col items-center relative">
      
      {/* Üst Menü - Sayfayı kaydırdıkça üstte şeffaf bir şekilde asılı kalır (Sticky + Blur) */}
      <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <Header />
      </div>

      {/* Dönen Karşılama Ekranı (Animasyonlu Hero Section) */}
      <Hero />

      {/* Kategoriler ve Filtrelenebilir Ürün Vitrini (Grid Düzeni) */}
      <ProductGallery />
      
      {/* Minimalist Footer (Alt Bilgi) */}
      <footer className="w-full py-12 text-center border-t border-zinc-100 mt-12">
        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
          © {new Date().getFullYear()} AURA. Sadece Yetişkinler İçindir.
        </p>
      </footer>

      {/* Sağ Altta Sabit Kalan Yüzen WhatsApp Butonu */}
      <FloatingWhatsApp />

    </main>
  );
}