'use client';

import { Crown } from 'lucide-react';
import useCountUp from '@/hooks/useCountUp';
import styles from './HeroStatsCard.module.css';

export default function HeroStatsCard() {
  const projectsCount = useCountUp(120, 1600);
  const satisfactionCount = useCountUp(98, 1400);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Subtle breathing ambient background light layers */}
        <div className={styles.ambientGlow} aria-hidden="true" />
        <div className={styles.ambientGlowSecondary} aria-hidden="true" />
        <div className={styles.shimmerRay} aria-hidden="true" />

        {/* Top: 120+ Projects Delivered with Radar / Sonar Pulse Icon */}
        <div className={styles.header}>
          <div className={styles.iconCircleWrapper} aria-hidden="true">
            {/* Concentric Sonar Pulse Waves radiating outward */}
            <span className={`${styles.sonarWave} ${styles.sonarWave1}`} />
            <span className={`${styles.sonarWave} ${styles.sonarWave2}`} />
            <span className={`${styles.sonarWave} ${styles.sonarWave3}`} />
            
            <div className={styles.iconCircle}>
              {/* Rotating conical radar beam sweep */}
              <div className={styles.radarSweep} />
              
              {/* Interactive Target / Sonar SVG */}
              <svg 
                className={styles.targetIconSvg} 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer ring */}
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.2" className={styles.radarRingOuter} />
                {/* Middle ring */}
                <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2.2" className={styles.radarRingMid} />
                {/* Inner target circle */}
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.2" className={styles.radarRingInner} />
                {/* Center glowing ping dot */}
                <circle cx="24" cy="24" r="2.8" fill="currentColor" className={styles.radarDot} />
                
                {/* Crosshairs */}
                <line x1="24" y1="2" x2="24" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                <line x1="24" y1="41" x2="24" y2="46" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                <line x1="2" y1="24" x2="7" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                <line x1="41" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
          </div>
          <div className={styles.headerText}>
            <div className={styles.bigNumberRow}>
              <span className={styles.bigNumber}>{projectsCount}</span>
              <span className={styles.plusSign}>+</span>
            </div>
            <span className={styles.subtitle}>Projects Delivered</span>
          </div>
        </div>

        {/* Client Satisfaction Bar */}
        <div className={styles.satisfactionRow}>
          <span className={styles.satisfactionLabel}>Client Satisfaction</span>
          <span className={styles.satisfactionValue}>{satisfactionCount}%</span>
        </div>
        <div className={styles.progressTrack} role="progressbar" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
          <div className={styles.progressBar}>
            <span className={styles.progressGleam} aria-hidden="true" />
          </div>
        </div>

        <div className={styles.divider} />

        {/* 3 Metric Columns with subtle dividers */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>5+</span>
            <span className={styles.metricLbl}>YEARS</span>
          </div>
          <div className={styles.vSeparator} />
          <div className={styles.metricItem}>
            <span className={styles.metricVal}>24/7</span>
            <span className={styles.metricLbl}>SUPPORT</span>
          </div>
        </div>

        {/* Centered Quality Metric */}
        <div className={styles.centerMetric}>
          <span className={styles.metricVal}>100%</span>
          <span className={styles.metricLbl}>QUALITY</span>
        </div>

        {/* Bottom Badges: ACTIVE & PREMIUM */}
        <div className={styles.badgeRow}>
          <div className={styles.activeBadge}>
            <span className={styles.activeDot} aria-hidden="true" />
            <span>ACTIVE</span>
          </div>
          <div className={styles.premiumBadge}>
            <Crown size={14} className={styles.crownIcon} aria-hidden="true" />
            <span>PREMIUM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
