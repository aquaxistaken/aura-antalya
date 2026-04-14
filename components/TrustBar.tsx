"use client";

export default function TrustBar() {
  const items = [
    { icon: "🚚", text: "AYNI GÜN TESLİMAT" },
    { icon: "💳", text: "KAPIDA ÖDEME" },
    { icon: "🛡️", text: "ORİJİNAL ÜRÜN" },
    { icon: "📍", text: "ANTALYA HIZLI KURYE" }
  ];

  return (
    <div className="w-full bg-[#0a0a0a] border-y border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2">
              <span className="text-2xl opacity-80">{item.icon}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}