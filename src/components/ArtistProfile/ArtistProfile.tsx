'use client'
import Image from 'next/image';
import styles from './ArtistProfile.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

export default function ArtistProfile() {
  const { language, i18n } = useContext(I18nContext)
  return (
    <div className={styles.profile}>
      <div className={`${styles.content} ${styles.contentBackground}`}>

        <div className={styles.text}>
        <div className={styles.artistName}>{parse(i18n[language].artist.title)}</div>
          <div>{parse(i18n[language].artist.text2)}</div>
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