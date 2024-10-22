'use client'
import Image from 'next/image';
import styles from './ArtistProfile.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';


export default function ArtistProfile() {
  const { language, i18n } = useContext(I18nContext)
  return (
    <div className={styles.profile}>
      <div className={`${styles.content} ${styles.contentBackground}`}>

        <div className={styles.text}>
        <div className={styles.artistName}>Catherine Sénéchal</div>
          <p>{i18n[language].artist.text1}</p>
          <p>{i18n[language].artist.text2}</p>
        </div>
        <div className={styles.images}>
          <div className={styles.artistArtwork}>
            <Image src="/img/artistProfile/c_senechal_artwork.jpg" alt="Œuvre de Catherine Sénéchal" width={200} height={200} layout="responsive" />
          </div>
          <div className={styles.artistPhoto}>
            <Image src="/img/artistProfile/c_senechal.jpg" alt="Catherine Sénéchal" width={200} height={200} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}