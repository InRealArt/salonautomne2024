'use client'
import React from 'react';
import styles from './CatalogueStats.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

const CatalogueStats = () => {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Le catalogue InRealArt c'est</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>10 +</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat11)}</span>
            <span className={styles.boldText}> {parse(i18n[language].stats.stat12)} </span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat13)}</span>
            <span className={styles.boldText}> {parse(i18n[language].stats.stat14)}</span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat15)} </span>
            <span className={styles.boldText}>{parse(i18n[language].stats.stat16)}</span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat17)}</span>
            <span className={styles.boldText}> {parse(i18n[language].stats.stat18)}</span>.
            <br></br><br></br>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>&lt; 100</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat21)}</span>
            <span className={styles.boldText}> {parse(i18n[language].stats.stat21)}</span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat23)}</span>
            <span className={styles.boldText}> {parse(i18n[language].stats.stat24)}</span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat24)}</span>
            <span className={styles.boldText}></span>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>5000 +</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat31)}</span>
            <span className={styles.boldText}>{parse(i18n[language].stats.stat32)}</span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat33)}</span>
            <span className={styles.boldText}>{parse(i18n[language].stats.stat34)}</span>
            <span className={styles.normalText}>{parse(i18n[language].stats.stat35)}</span>
            <span className={styles.boldText}>{parse(i18n[language].stats.stat36)}</span>
            <br></br><br></br>
          </div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumberBig}>70 %</div>
          <div className={styles.statDescription}>
            <span className={styles.normalText}></span>
            <span className={styles.boldText}> </span>
            <span className={styles.normalText}></span>
            <span className={styles.boldText}> </span>
            <span className={styles.normalText}></span>
            <span className={styles.boldText}></span>
            <span className={styles.normalText}></span>
            <span className={styles.boldText}></span>
            <span className={styles.normalText}></span>
            <span className={styles.boldText}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueStats;