'use client';

import { useState, useEffect } from 'react';
import styles from './DynamicHeadline.module.css';

const ROTATING_PHRASES = [
  'Growth.',
  'Trading Brokerage.',
  'AI Agents.',
  'Web3 Ecosystem.',
  'Enterprise Scale.',
];

export default function DynamicHeadline() {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger exit animation
      setAnimState('exit');

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        setAnimState('enter');
      }, 350); // exit duration
    }, 2800); // cycle duration

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 id="product-hero-title" className={styles.headline}>
      <span className={styles.staticPrefix}>
        Software That Powers Your
      </span>
      <span className={styles.dynamicWrapper}>
        <em
          key={index}
          className={`${styles.dynamicText} ${
            animState === 'enter' ? styles.enter : styles.exit
          }`}
        >
          {ROTATING_PHRASES[index]}
        </em>
      </span>
    </h1>
  );
}
