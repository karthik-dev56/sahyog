import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translation dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.liveMap': 'Live Map',
    'nav.howItWorks': 'How It Works',
    'nav.stats': 'Stats',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.reportNow': 'Report Now',
    'hero.title1': 'SAVE COASTS.',
    'hero.title2': 'REPORT HAZARDS.',
    'hero.subtitle': 'Real-time crowdsourced ocean intelligence — trusted by INCOIS.',
    'hero.cta': 'EXPLORE LIVE DASHBOARD →'
  },
  hi: {
    'nav.home': 'होम',
    'nav.liveMap': 'लाइव मैप',
    'nav.howItWorks': 'कैसे काम करता है',
    'nav.stats': 'आंकड़े',
    'nav.team': 'टीम',
    'nav.contact': 'संपर्क',
    'nav.reportNow': 'रिपोर्ट करें',
    'hero.title1': 'तटों को बचाएं।',
    'hero.title2': 'खतरों की रिपोर्ट करें।',
    'hero.subtitle': 'वास्तविक समय में जनसहयोग से समुद्री खुफिया — INCOIS द्वारा विश्वसनीय।',
    'hero.cta': 'लाइव डैशबोर्ड देखें →'
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.liveMap': 'நேரடி வரைபடம்',
    'nav.howItWorks': 'எப்படி வேலை செய்கிறது',
    'nav.stats': 'புள்ளிவிவரங்கள்',
    'nav.team': 'குழு',
    'nav.contact': 'தொடர்பு',
    'nav.reportNow': 'அறிக்கை செய்யுங்கள்',
    'hero.title1': 'கடற்கரைகளைக் காப்பாற்றுங்கள்.',
    'hero.title2': 'ஆபத்துகளைப் புகாரளியுங்கள்.',
    'hero.subtitle': 'நேரடி கூட்டு பங்களிப்பு கடல் நுண்ணறிவு — INCOIS ஆல் நம்பகமான.',
    'hero.cta': 'நேரடி டாஷ்போர்டைப் பார்க்கவும் →'
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.liveMap': 'లైవ్ మ్యాప్',
    'nav.howItWorks': 'ఎలా పని చేస్తుంది',
    'nav.stats': 'గణాంకాలు',
    'nav.team': 'టీమ్',
    'nav.contact': 'సంప్రదింపు',
    'nav.reportNow': 'రిపోర్ట్ చేయండి',
    'hero.title1': 'తీరాలను రక్షించండి.',
    'hero.title2': 'ప్రమాదాలను నివేదించండి.',
    'hero.subtitle': 'నిజ సమయ ప్రజా సహకార సముద్ర గూఢచారం — INCOIS చేత విశ్వసనీయం.',
    'hero.cta': 'లైవ్ డాష్‌బోర్డ్ చూడండి →'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;