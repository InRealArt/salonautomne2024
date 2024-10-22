import React, { createContext, useState, ReactNode } from 'react';


export type Language = 'en' | 'fr';

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: {
      hero: {
        title: string;
      },
      artist: {
        text1: string,
        text2: string
      }
    };
  };
}

const i18n: I18nContextType['i18n'] = {
  en: {
    hero: {
      title: 'Autumn with the artist Catherine Sénéchal and InReal Art',
    },
    artist: {
      text1: "Discover the exclusive world of Catherine Sénéchal at the prestigious Salon d'Automne 2024, a not-to-be-missed event that brings together the greatest talents in contemporary art. Renowned for its high artistic standards and international reach, the show offers an exceptional showcase for collectors and art lovers in search of rare and unique works.",
      text2: "Among the artists on show, Catherine Sénéchal stands out for her ability to transcend the boundaries of artistic expression. With a spontaneous, intuitive approach, Catherine Sénéchal redefines the codes of contemporary art, creating vibrant works that captivate with their sincerity and visual depth. Her creative process, imbued with freedom, reflects the pure essence of her unconscious, leaving each viewer to interpret and project their own emotions through her canvases. The powerful colours he or she manipulates, inspired by the spirit of masters such as Brancusi, instil an infectious joie de vivre.",
    }
  },
  fr: {
    hero: {
      title: 'L’Automne avec l’artiste Catherine Sénéchal et InReal Art',
    },
    artist: {
      text1: "Découvrez l'univers exclusif de Catherine Sénéchal lors du prestigieux Salon d'Automne 2024, un événement incontournable qui rassemble les plus grands talents de l'art contemporain. Ce salon, reconnu pour son exigence artistique et sa portée internationale, offre une vitrine exceptionnelle aux collectionneurs et amateurs d'art en quête d'œuvres rares et uniques.",
      text2: "Parmi les artistes exposés, Catherine Sénéchal se distingue par sa capacité à transcender les frontières de l'expression artistique. Avec une approche spontanée et intuitive, Catherine Sénéchal redéfinit les codes de l'art contemporain, en créant des œuvres vibrantes qui captivent par leur sincérité et leur profondeur visuelle. Son processus créatif, empreint de liberté, reflète l'essence pure de son inconscient, laissant chaque spectateur interpréter et projeter ses propres émotions à travers ses toiles. Les couleurs puissantes qu'il ou elle manipule, inspirées par l'esprit de maîtres comme Brancusi, insufflent une joie de vivre contagieuse.",
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