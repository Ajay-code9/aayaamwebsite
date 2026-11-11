'use client';
import { useEffect, useState } from 'react';
import styles from './NetflixIntro.module.css';

export default function NetflixIntro() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only run on first initial session load
    const shownKey = 'aayaamx_netflix_intro_shown';
    if (sessionStorage.getItem(shownKey)) {
      setVisible(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);

    const endTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(shownKey, '1');
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ''}`} aria-hidden="true">
      <div className={styles.stage}>
        {/* Glow behind ribbon */}
        <div className={styles.glow} />
        
        {/* Netflix style multi-ribbon light beam explosion */}
        <div className={styles.ribbonContainer}>
          <div className={`${styles.ribbonBeam} ${styles.beam1}`} />
          <div className={`${styles.ribbonBeam} ${styles.beam2}`} />
          <div className={`${styles.ribbonBeam} ${styles.beam3}`} />
          <div className={`${styles.ribbonBeam} ${styles.beam4}`} />
          <div className={`${styles.ribbonBeam} ${styles.beam5}`} />
          <img
            src="/aayaamx-infinity.png"
            alt=""
            className={styles.infinityLogo}
          />
        </div>

        <div className={styles.lensFlash} />
      </div>
    </div>
  );
}
