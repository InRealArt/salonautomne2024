'use client'
import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.scss';
import { CircleDollarSign, Gem, ThumbsUp } from 'lucide-react';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

const WhyChooseUs = () => {
  

  const { language, i18n } = useContext(I18nContext)
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{parse(i18n[language].whyChooseUS.title)}</h2>
      <div className={styles.subtitle}>
        {parse(i18n[language].whyChooseUS.subTitle)}
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Gem size={20} color="black" />
          </div>

          <div className={styles.cardTitle}>Very Rare</div>
          <div className={styles.cardText}>
            {parse(i18n[language].whyChooseUS.cardText1)}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <ThumbsUp size={20} color="black" />
          </div>
          <div className={styles.cardTitle}>Une Marketplace Unique</div>

          <div className={styles.cardText}>
            Notre marketplace se distingue par sa singularité et son innovation,
            intégrant harmonieusement des œuvres physiques, des NFTs, et des
            droits d&#039;auteur fractionnés.
            <br />
            <br />
            Grâce à la blockchain, nous garantissons la transparence et la
            sécurité des transactions tout en assurant la traçabilité de chaque
            œuvre.
            <br />
            <br />
            Cette approche novatrice permet aux collectionneurs d&#039;accéder à
            des œuvres diversifiées et uniques, tout en participant à un marché
            artistique de pointe.
          </div>  
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <CircleDollarSign size={20} color="black" />
          </div>
          <div className={styles.cardTitle}>Opportunité d'Investissement</div>
          <div className={styles.cardText}>
            L&#039;art n’est pas seulement une passion, c’est aussi une
            opportunité d&#039;investissement.
            <br />
            Notre plateforme vous permet de diversifier votre portefeuille en
            acquérant des œuvres physiques et numériques ainsi que des droits
            d&#039;auteur.
            <br />
            <br />
            Grâce à la rareté des pièces proposées, chaque acquisition a le
            potentiel de prendre de la valeur avec le temps.
            <br />
            <br />
            Que vous soyez novice ou expert, vous rejoignez ici un marché où
            l&#039;art peut devenir une source de valorisation à long terme.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;