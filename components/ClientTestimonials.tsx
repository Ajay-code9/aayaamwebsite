'use client';

import { useState } from 'react';
import { Star, ShieldCheck, Quote, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { clientTestimonials } from '@/lib/testimonials';
import styles from './ClientTestimonials.module.css';

export default function ClientTestimonials() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>CLIENT ENDORSEMENTS & PROOF</span>
          </div>
          <h2 id="testimonials-heading" className={styles.title}>
            Trusted by Leaders in Fintech, Web3 & Enterprise.
          </h2>
          <p className={styles.subtitle}>
            Hear directly from the founders, managing directors, and engineering heads whose critical software infrastructure we built and scaled.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {clientTestimonials.map(t => {
            const hasError = imageErrors[t.id];

            return (
              <article key={t.id} className={styles.card}>
                {/* Top Badge & Metric */}
                <div className={styles.cardTop}>
                  <div className={styles.starsRow} aria-label="5 out of 5 stars rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className={styles.starIcon} fill="currentColor" />
                    ))}
                  </div>
                  <div className={styles.metricBadge}>
                    <span className={styles.metricVal}>{t.metric}</span>
                    <span className={styles.metricLbl}>{t.metricLabel}</span>
                  </div>
                </div>

                {/* Quote Body */}
                <div className={styles.quoteWrapper}>
                  <Quote size={28} className={styles.quoteIcon} aria-hidden="true" />
                  <blockquote className={styles.quoteText}>
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Project Tag */}
                <div className={styles.projectTagRow}>
                  <span className={styles.projectTag}>{t.projectType}</span>
                </div>

                {/* Author Info */}
                <div className={styles.authorRow}>
                  <div className={styles.avatarWrapper}>
                    {!hasError ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className={styles.avatarImg}
                        onError={() => handleImageError(t.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.avatarFallback} aria-hidden="true">
                        {t.initials}
                      </div>
                    )}
                    {t.verified && (
                      <span className={styles.verifiedBadge} title="Verified Client Project">
                        <ShieldCheck size={13} strokeWidth={2.4} />
                      </span>
                    )}
                  </div>

                  <div className={styles.authorMeta}>
                    <div className={styles.nameRow}>
                      <strong className={styles.authorName}>{t.name}</strong>
                    </div>
                    <span className={styles.authorRole}>{t.role}</span>
                    <span className={styles.authorCompany}>{t.company} • {t.location}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Trust Assurance */}
        <div className={styles.trustBar}>
          <div className={styles.trustMetric}>
            <strong>100%</strong>
            <span>Verified Case Deliveries</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustMetric}>
            <strong>99.97%</strong>
            <span>Production SLA Maintained</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustMetric}>
            <strong>$380M+</strong>
            <span>Volume Handled Across Systems</span>
          </div>
          <div className={styles.trustLinkWrapper}>
            <Link href="/portfolio" className={styles.trustLink}>
              Explore Full Case Studies <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
