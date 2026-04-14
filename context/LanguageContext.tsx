"use client"; // Client-side state kullanacağımız için bu şart

import { createContext, useState, useContext } from "react";

// Context için tip tanımlamaları
type Language = "tr" | "en";
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

// Context'i oluşturuyoruz
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Tüm siteyi sarmalayacak Provider bileşeni
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("tr"); // Varsayılan dil TR

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Componentlerde kolayca kullanmak için özel hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage, LanguageProvider içinde kullanılmalıdır");
  return context;
};