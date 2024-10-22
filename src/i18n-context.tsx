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
        title: string,
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
        subTitle: string,
        cardTitle1: string,
        cardTitle2: string,
        cardTitle3: string,
        cardText1: string,
        cardText2: string,
        cardText3: string,
      },
      testimonials: {
        title: string,
        artist1: string,
        artist2: string,
        ranking: string
      }
      ,
      partners: {
        title: string
      },
      catalogueRequest: {
        title: string,
        subTitle: string,
        formItem1:string,
        formItem2:string,
        formItem3:string,
        button: string
      },
      toast: {
        errorEmail: string,
        errorName: string
      }
    };
  };
}

const i18n: I18nContextType['i18n'] = {
  en: {
    hero: {
      title: "Salon d'Automne 2024 : Exclusive program with Catherine Sénéchal and InRealArt",
    },
    eventInfo: {
      title: "Meet Catherine Sénéchal through her amazing paintings <br> during the prestigious Salon d'Automne 2024.",
      date: "When : from october 23 to 27",
      place: "Where : Booth 52",
      button: "FREE and Exclusive catalog"
    },
    artist: {
      title: `“What you see makes you happy, it's all there” <br> Catherine Sénéchal`,
      text1: ``,
      text2: `Discover the refined world of Catherine Sénéchal, a contemporary artist who combines boldness and elegance. Her vibrant, intuitive works captivate with their visual richness and sincerity. Inspired by Brancusi, she offers a unique sensory experience, where tradition and modernity meet. Acquiring a painting from Catherine is an incredible momentum to enter an exclusive circle of contemporary art, combining emotion and rarity.`,
    },
    expert: {
      title: `Sénéchal perceives colors <br> as a symbol of joy, life and energy <br>...`,
      words: `... a vitality that permeates his work. Her bold compositions - portraits, interiors, still lifes, urban landscapes and geometrically inspired works - express human emotions, from joy to sorrow. Through her art, she invites viewers to feel and explore their own feelings”`,
      name: `Meulemans Catherine `,
      role: `Head of Sales Founder Galerie Art Thema`
    },
    stats: {
      stat11: `Artists selected from our global catalog`,
      stat12: ``,
      stat13: ``,
      stat14: ``,
      stat15: ``,
      stat16: ``,
      stat17: ``,
      stat18: ``,
      stat19: ``,
      stat110: ``,
      stat21: `Carefully selected works to embellish your collection.`,
      stat22: ``,
      stat23: ``,
      stat24: ``,
      stat25: ``,
      stat26: ``,
      stat27: ``,
      stat28: ``,
      stat29: ``,
      stat210: `<br></br>`,
      stat31: `Transactions on our marketplace`,
      stat32: ``,
      stat33: ` `,
      stat34: ` `,
      stat35: ` `,
      stat36: ``,
      stat37: ` `,
      stat38: ` `,
      stat39: ` `,
      stat310: `<br></br>`,
      stat41: `of our artists featured in the ICAC 50-60 ranking.`,
      stat42: ``,
      stat43: ``,
      stat44: ``,
      stat45: ` `,
      stat46: ` `,
      stat47: ``,
      stat48: ` `,
      stat49: ` `,
      stat410: `<br></br>`,
      title: 'Browsing InReal Art’s catalog'
    },
    whyChooseUS: {
      title: "Why choosing us ?",
      subTitle: "Explore a unique collection of physical paintings and rare sculpture, <br> their digital copies (NFT), accompanied by their copyrights.",
      cardText1: `With over 80 years of combined experience, our team selects
      less than 100 works by renowned artists, chosen for their uniqueness
      and their ability to enrich a collection.
      <br />
      <br />
      Whether you're a novice or a seasoned collector, acquiring these rare pieces
      is a privilege, offering distinction and value to your collection.`,
      cardText2: `Our marketplace innovates by integrating physical works, NFTs and fractional
      fractional copyrights.
      <br />
      <br />
      Thanks to blockchain, we ensure transparent and secure transactions
      transactions, guaranteeing the traceability of works. This approach enables
      collectors access to a unique and diverse art market.
      market.`,
      cardText3: `Art is both a passion and an investment opportunity.
      investment opportunity. Our platform enables you to diversify your portfolio
      portfolio with physical, digital and copyright works.
      rights.
      <br />
      <br />
      The rarity of the pieces on offer offers potential for appreciation. Whether
      whether you&#039;re a novice or an expert, you&#039;re entering a market where art can become
      become a source of lasting value.`,
      cardTitle1: 'Very Rare',
      cardTitle2: 'A Unique Marketplace',
      cardTitle3: 'Investment opportunity'
    },
    testimonials: {
      title: `Testimonials`,
      artist1: `“With InRealArt, I can take Pictural Reverism to the pinnacle of its art and pass on my heritage in a timeless way through these canvases. It's a unique opportunity to merge tradition and innovation, offering a new dimension to my work.“`,
      artist2: `“Thanks to InRealArt, I can take my artistic vision and pop art to new horizons and share my innovative work with the whole world. It's a privilege to be part of this revolution, where each work transcends time and finds its place in the future of art.“`,
      ranking: 'contemporary style Classification'
    },
    partners: {
      title: `They trust us`
    },
    catalogueRequest: {
      title: "Catalog Salon d'Automne 2024",
      subTitle: 'Explore a unique collection of physical canvases, their digital copies (NFT) and their copyrights.',
      formItem1: 'Name',
      formItem2: 'Email',
      formItem3: 'Phone',
      button: 'Get the catalog'
    },
    toast: {
      errorEmail: 'E-mail is not in the correct format',
      errorName: 'Name is mandatory'
    }
  },
  fr: {
    hero: {
      title: "Salon d’Automne 2024 Un programme exclusif avec l'artiste avec l’artiste Catherine Sénéchal et InRealArt",
    },
    eventInfo: {
      title: "Lors du prestigieux salon d'Automne 2024, <br>venez rencontrer Catherine Sénéchal et ses oeuvres",
      date: "Quand : du 23 au 27 octobre 2024",
      place: "Où : Emplacement 52",
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
      stat11: `Artistes sélectionnés dans notre catalogue global`,
      stat12: ``,
      stat13: ``,
      stat14: ``,
      stat15: ``,
      stat16: ``,
      stat17: ``,
      stat18: ``,
      stat19: ``,
      stat110: `<br></br>`,
      stat21: `Oeuvres soigneusement choisies pour embellir votre collection.`,
      stat22: ``,
      stat23: ``,
      stat24: ``,
      stat25: ``,
      stat26: ``,
      stat27: ``,
      stat28: ``,
      stat29: ``,
      stat210: `<br></br>`,
      stat31: `Transactions réalisées sur notre marketplace`,
      stat32: ``,
      stat33: ``,
      stat34: ``,
      stat35: ``,
      stat36: ``,
      stat37: ` `,
      stat38: ` `,
      stat39: ` `,
      stat310: `<br></br>`,
      stat41: `de nos artistes figurent dans le classement 50-60 de l’ICAC.`,
      stat42: ``,
      stat43: ``,
      stat44: ``,
      stat45: ``,
      stat46: ``,
      stat47: ``,
      stat48: ``,
      stat49: ``,
      stat410: ``,
      title: "Le catalogue InRealArt c'est"
    },
    whyChooseUS: {
      title: "Pourquoi nous choisir ?",
      subTitle: "Explorez une collection unique de toiles physiques et de sculpture rare, <br /> de leurs copies numériques (NFT), accompagnées de leurs droits d'auteur.",
      cardText1: `Avec plus de 80 ans d&#039;expérience cumulée, notre équipe sélectionne
      moins de 100 œuvres d&#039;artistes renommés, choisies pour leur unicité
      et leur capacité à enrichir une collection.
      <br />
      <br />
      Que vous soyez collectionneur novice ou aguerri, acquérir ces pièces rares
      est un privilège, offrant distinction et valeur à votre collection.`,
      cardText2: `Notre marketplace innove en intégrant des œuvres physiques, des NFTs et
      des droits d&#039;auteur fractionnés.
      <br />
      <br />
      Grâce à la blockchain, nous assurons des transactions transparentes et
      sécurisées, garantissant la traçabilité des œuvres. Cette approche permet
      aux collectionneurs d&#039;accéder à un marché artistique unique et
      diversifié.`,
      cardText3: `L&#039;Art est à la fois une passion et une opportunité
      d&#039;investissement. Notre plateforme vous permet de diversifier votre
      portefeuille avec des œuvres physiques, numériques, et des droits
      d&#039;auteur.
      <br />
      <br />
      La rareté des pièces proposées offre un potentiel d&#039;appréciation. Que
      vous soyez novice ou expert, vous accédez à un marché où l&#039;art peut
      devenir une source de valorisation durable.`,
      cardTitle1: 'Very Rare',
      cardTitle2: 'Une Marketplace Unique',
      cardTitle3: "Opportunité d'Investissement"
    },
    testimonials: {
      title: `Témoignages`,
      artist1: `“Avec InRealArt, je peux porter le Rêve au sommet de son art et transmettre mon héritage de manière intemporelle à travers ces toiles. 
                C&#039;est une opportunité unique de fusionner tradition et innovation, offrant une nouvelle dimension à mon travail.”`,
      artist2: `“Grâce à InRealArt, je peux propulser ma vision artistique et le pop-art vers de nouveaux horizons et partager mon travail innovant avec le monde entier. C’est un privilège d’intégrer cette révolution, où chaque œuvre transcende le temps et trouve sa place dans l’avenir de l’art.“`,
      ranking: 'Class. Style contemporain'
    },
    partners: {
      title: `Ils nous font confiance`
    },
    catalogueRequest: {
      title: "Catalogue Salon d'Automne 2024",
      subTitle: "Explorez une collection unique de toiles physiques, de leurs copies numériques (NFT), accompagnées de leurs droits d'auteur.",
      formItem1: 'Nom',
      formItem2: 'Email',
      formItem3: 'Tél.',
      button: 'Recevoir le catalogue'
    },
    toast: {
      errorEmail: "Le format de l'e-mail est incorrect",
      errorName: "Le nom est obligatoire"
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