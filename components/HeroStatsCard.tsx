'use client';

import { Target, Crown } from 'lucide-react';
import styles from './HeroStatsCard.module.css';

export default function HeroStatsCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Top: 120+ Projects Delivered with Target Icon */}
        <div className={styles.header}>
          <div className={styles.iconCircle} aria-hidden="true">
            <Target size={28} strokeWidth={2.2} />
          </div>
          <div className={styles.headerText}>
            <span className={styles.bigNumber}>120+</span>
            <span className={styles.subtitle}>Projects Delivered</span>
          </div>
        </div>

        {/* Client Satisfaction Bar */}
        <div className={styles.satisfactionRow}>
          <span className={styles.satisfactionLabel}>Client Satisfaction</span>
          <span className={styles.satisfactionValue}>98%</span>
        </div>
        <div className={styles.progressTrack} role="progressbar" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
          <div className={styles.progressBar} />
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
