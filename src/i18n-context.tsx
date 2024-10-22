import React, { createContext, useState, ReactNode } from 'react';


export type Language = 'en' | 'fr';

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: {
      hero: {
        title: string;
      }
    };
  };
}

const i18n: I18nContextType['i18n'] = {
  en: {
    hero: {
      title: 'Autumn with the artist Catherine Sénéchal and InReal Art',
    }
  },
  fr: {
    hero: {
      title: 'L’Automne avec l’artiste Catherine Sénéchal et InReal Art',
    }
  },
};

export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => { },
  i18n: i18n,
});

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>(
    (navigator.language.slice(0, 2) as Language) || 'en'
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, i18n }}>
      {children}
    </I18nContext.Provider>
  );
};