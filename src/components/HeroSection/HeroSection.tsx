"use client";

import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';

export default function ImageHeader() {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.header}>
      <Image
        src="/img/heroSection/section_Hero.jpg"
        alt="Salon d'Automne 2024"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/heroSection/salon_automne.jpg"
            alt="Ticket Salon d'Automne 2024"
            width={400}
            height={200}
          />
        </div>
        <div className={styles.title}>
          {i18n[language].hero.title}
        </div>
      </div>
    </div>
  );
}