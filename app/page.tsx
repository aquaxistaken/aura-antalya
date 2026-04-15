import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";
import WhatsAppContact from "@/components/FloatingWhatsApp";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* 1. Slayt Alanı */}
      <Hero />
      
      {/* 2. Güven Barı */}
      <TrustBar />
      
      {/* 3. Ana Ürün Galerisi (Butonlar ve Filtreleme Burada) */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <ProductGallery />
      </div>

      {/* 4. Alt Bilgi */}
      <Footer />
      
      {/* 5. Dil Değiştirme Butonu (Sahneye eklendi!) */}
      <LanguageToggle />

      {/* 6. WhatsApp İletişim */}
      <WhatsAppContact />
    </main>
  );
}