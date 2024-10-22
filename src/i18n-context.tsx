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
      eventInfo: {
        title: string,
        date: string,
        place: string,
        button: string
      }
      artist: {
        title: string,
        text1: string,
        text2: string
      },
      expert: {
        title: string,
        words: string,
        name: string,
        role: string
      },
      stats: {
        stat11: string,
      stat12: string,
      stat13: string,
      stat14: string,
      stat15: string,
      stat16: string,
      stat17: string,
      stat18: string,
      stat19: string,
      stat110: string,
      stat21: string,
      stat22: string,
      stat23: string,
      stat24: string,
      stat25: string,
      stat26: string,
      stat27: string,
      stat28: string,
      stat29: string,
      stat210: string,
      stat31: string,
      stat32: string,
      stat33: string,
      stat34: string,
      stat35: string,
      stat36: string,
      stat37: string,
      stat38: string,
      stat39: string,
      stat310: string,
      stat41: string,
      stat42: string,
      stat43: string,
      stat44: string,
      stat45: string,
      stat46: string,
      stat47: string,
      stat48: string,
      stat49: string,
      stat410: string    
      },
      whyChooseUS: {
        title: string,
        subTitle: string
      },
      testimonials: {
        artist1: string,
        artist2: string
      }
    };
  };
}

const i18n: I18nContextType['i18n'] = {
  en: {
    hero: {
      title: "Salon d'Automne 2024 An exclusive program with artist Catherine Sénéchal and InRealArt",
    },
    eventInfo: {
      title: "Come and meet Catherine Sénéchal <br>and her works at the prestigious Salon d'Automne 2024.",
      date: "When : from october 23 to 27",
      place: "Where : Booth B4",
      button: "Download the free exclusive catalog"
    },
    artist: {
      title: `“What you see makes you happy, it's all there” <br> Catherine Sénéchal`,
      text1: ``,
      text2: `Discover the refined world of Catherine Sénéchal, a contemporary artist who combines boldness and elegance. Her vibrant, intuitive works captivate with their visual richness and sincerity. Inspired by Brancusi, she offers a unique sensory experience, where tradition and modernity meet. To acquire a piece by Catherine is to enter an exclusive circle of contemporary art, combining emotion and rarity.`,
    },
    expert: {
      title: `Sénéchal sees colors <br> as a symbol of joy, life and energy <br>...`,
      words: `... a vitality that permeates his work. Her bold compositions - portraits, interiors, still lifes, urban landscapes and geometrically inspired works - express human emotions, from joy to sorrow. Through her art, she invites viewers to feel and explore their own feelings”`,
      name: `Meulemans Catherine `,
      role: `Head of Sales Founder Galerie Art Thema`
    },
    stats: {
      stat11: `This is the `,
      stat12: `number of artists `,
      stat13: `who have been `,
      stat14: `selected `,
      stat15: `to join the IRA adventure by making available `,
      stat16: `unique works`,
      stat17: `and`,
      stat18: `rare`,
      stat19: ``,
      stat110: ``,
      stat21: `This is the`,
      stat22: `number of works `,
      stat23: `we've chosen for`,
      stat24: `your collection `,
      stat25: `, whether you're`,
      stat26: `novice, collector or expert `,
      stat27: ``,
      stat28: ``,
      stat29: ``,
      stat210: `<br></br>`,
      stat31: `This is the`,
      stat32: `number of international testers `,
      stat33: `who have signed up to `,
      stat34: `evaluate and test `,
      stat35: `our `,
      stat36: `innovative marketplace `,
      stat37: ` `,
      stat38: ` `,
      stat39: ` `,
      stat310: `<br></br>`,
      stat41: `This is the`,
      stat42: `artists' share `,
      stat43: `having`,
      stat44: `a quotation`,
      stat45: `in the `,
      stat46: `top 60 I-CAC `,
      stat47: `according to their `,
      stat48: `indices. Two artists `,
      stat49: `feature in the `,
      stat410: `top 10 <br></br>`      
    },
    whyChooseUS: {
      title: "Why download our catalogue ?",
      subTitle: "Explore a unique collection of physical paintings and rare sculpture, <br /> their digital copies (NFT), accompanied by their copyrights."
    },
    testimonials: {
      artist1: "With InRealArt, I can take the Dream to the pinnacle of its art and pass on my heritage in a timeless way through these canvases. It's a unique opportunity to merge tradition and innovation, offering a new dimension to my work.",
      artist2: "Thanks to InRealArt, I can take my artistic vision and pop art to new horizons and share my innovative work with the whole world. It's a privilege to be part of this revolution, where each work transcends time and finds its place in the future of art."
    }
  },
  fr: {
    hero: {
      title: "Salon d’Automne 2024 Un programme exclusif avec l'artiste avec l’artiste Catherine Sénéchal et InRealArt",
    },
    eventInfo: {
      title: "Lors du prestigieux salon d'Automne 2024, <br>venez rencontrer Catherine Sénéchal et ses oeuvres",
      date: "Quand : du 23 au 27 octobre 2024",
      place: "Où : Emplacement B4",
      button: "Téléchargez gratuitement le catalogue exclusif"
    },
    artist: {
      title: `“Ce que vous voyez vous rend heureux, tout est là” <br> Catherine Sénéchal`,
      text1: ``,
      text2: `Découvrez l'univers raffiné de Catherine Sénéchal, artiste contemporaine qui marie audace et élégance. Ses œuvres vibrantes et intuitives captivent par leur richesse visuelle et leur sincérité. Inspirée par Brancusi, elle propose une expérience sensorielle unique, où tradition et modernité se rencontrent. Acquérir une pièce de Catherine, c'est entrer dans un cercle exclusif de l&#039;art contemporain, alliant émotion et rareté.`, 
    },
    expert: {
      title: `Sénéchal considère les couleurs comme un symbole de joie, de vie et d’énergie <br>...`,
      words: `... une vitalité qui imprègne son œuvre. Ses compositions audacieuses – portraits, intérieurs, natures mortes, paysages urbains et œuvres d'inspiration géométrique – expriment les émotions humaines, des joies aux peines. À travers son art, elle invite le spectateur à ressentir et à explorer ses propres sentiments” Meulemans Catherine Head of Sales Fondatrice Galerie Art Thema`,
      name: `Meulemans Catherine `,
      role: `Head of Sales Founder Galerie Art Thema`
    },
    stats: {
      stat11: `C'est le `,
      stat12: `nombre d'artistes `,
      stat13: `qui ont été `,
      stat14: `sélectionnés `,
      stat15: `pour rejoindre l'aventure IRA en mettant à disposition des`,
      stat16: `œuvres uniques `,
      stat17: `et `,
      stat18: `rares `,
      stat19: ``,
      stat110: `<br></br>`,
      stat21: `C'est le `,
      stat22: `nombre d œuvres `,
      stat23: `que nous avons choisies pour `,
      stat24: `votre collection`,
      stat25: `, que vous soyez `,
      stat26: `novice, collectionneur ou expert`,
      stat27: ``,
      stat28: ``,
      stat29: ``,
      stat210: `<br></br>`,
      stat31: `C'est le`,
      stat32: `nombre de testeurs internationaux `,
      stat33: `qui se sont inscrits pour `,
      stat34: `évaluer et tester `,
      stat35: `notre `,
      stat36: `marketplace innovante`,
      stat37: ` `,
      stat38: ` `,
      stat39: ` `,
      stat310: `<br></br>`,
      stat41: `C'est la `,
      stat42: `part d'artites `,
      stat43: `ayant `,
      stat44: `une cote `,
      stat45: `dans le `,
      stat46: `top 60 I-CAC `,
      stat47: `selon leurs  `,
      stat48: `indices respectifs. Deux artistes `,
      stat49: `figurent dans le  `,
      stat410: `top 10.`,

    },
    whyChooseUS: {
      title: "Pourquoi télécharger notre catalogue ?",
      subTitle: "Explorez une collection unique de toiles physiques et de sculpture rare, <br /> de leurs copies numériques (NFT), accompagnées de leurs droits d'auteur."
    },
    testimonials: {
      artist1: "Avec InRealArt, je peux porter le Rêve au sommet de son art et transmettre mon héritage de manière intemporelle à travers ces toiles. C'est une opportunité unique de fusionner tradition et innovation, offrant une nouvelle dimension à mon travail.",
      artist2: "Grâce à InRealArt, je peux propulser ma vision artistique et le pop-art vers de nouveaux horizons et partager mon travail innovant avec le monde entier. C’est un privilège d’intégrer cette révolution, où chaque œuvre transcende le temps et trouve sa place dans l’avenir de l’art."
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
  const [language, setLanguage] = useState<Language>('en');

  return (
    <I18nContext.Provider value={{ language, setLanguage, i18n }}>
      {children}
    </I18nContext.Provider>
  );
};