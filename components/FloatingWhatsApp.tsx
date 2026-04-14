"use client";

export default function FloatingWhatsApp() {
  // Senin numaran (Başında + veya 00 olmadan wa.me formatı için en temizi budur)
  const phoneNumber = "905384075786";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Ekranın sağ altına sabitleme, z-index (50) ile her şeyin üstünde tutma ve hover efekti
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-all duration-300 group"
      aria-label="WhatsApp İletişim"
    >
      {/* Orijinal WhatsApp SVG İkonu */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-9 md:h-9"
      >
        <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.124.553 4.195 1.604 6.01L.003 24l6.105-1.601A11.967 11.967 0 0012.031 24c6.646 0 12.03-5.388 12.03-12.035S18.677 0 12.031 0zm0 22.001c-1.8 0-3.563-.483-5.111-1.401l-.367-.217-3.795.996.996-3.7l-.238-.379C2.463 15.42 1.956 13.743 1.956 12.035 1.956 6.467 6.469 1.954 12.031 1.954c5.561 0 10.073 4.513 10.073 10.081s-4.512 10.081-10.073 10.081z" />
        <path d="M17.585 14.398c-.28-.14-1.657-.818-1.914-.912-.257-.094-.444-.14-.63.14-.187.281-.723.912-.887 1.099-.163.187-.327.21-.607.07-.28-.14-1.182-.436-2.253-1.393-.834-.744-1.397-1.664-1.56-1.945-.164-.281-.018-.433.123-.573.127-.127.28-.328.42-.491.14-.164.187-.28.28-.468.093-.187.047-.351-.023-.491-.07-.14-.63-1.52-.863-2.083-.227-.549-.457-.474-.63-.483-.163-.008-.35-.01-.536-.01-.187 0-.491.07-.748.351-.257.281-.981.959-.981 2.338 0 1.38.1 2.715 1.144 3.96 1.145 1.543.164.257 2.616 1.099 4.312 1.731.745.236 1.328.203 1.83.153.535-.053 1.657-.678 1.89-1.332.234-.654.234-1.216.164-1.332-.07-.117-.257-.187-.537-.328z" />
      </svg>
      
      {/* Üzerine gelince (Hover) çıkan zarif uyarı balonu */}
      <span className="absolute right-20 bg-white text-black px-4 py-2 rounded-lg text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap tracking-[0.2em] shadow-xl uppercase">
        WHATSAPP DESTEK
      </span>
    </a>
  );
}