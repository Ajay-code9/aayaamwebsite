'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Blocks, ChartNoAxesCombined, GraduationCap, Layers3 } from 'lucide-react';
import { caseStudies, caseStudyHref, caseStudyMedia } from '@/lib/portfolio';

const categoryIcons = {
  Fintech: ChartNoAxesCombined,
  Blockchain: Blocks,
  'Custom Software': Layers3,
  EdTech: GraduationCap,
};

export default function CaseStudyCard({project, index, featured = false}: {
  project: (typeof caseStudies)[number];
  index: number;
  featured?: boolean;
}) {
  const Icon = categoryIcons[project.category];
  const { cover } = caseStudyMedia(project.slug);
  const Title = featured ? 'h3' : 'h2';
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return <article className="case-study-card" id={project.slug}>
    <div className="case-study-card-inner">
      <figure className={`case-study-media ${loaded ? 'has-loaded' : ''}`} data-project-screenshot={cover.caption ? '' : undefined}>
        <img
          ref={imgRef}
          src={cover.src}
          alt={cover.caption}
          width={cover.width}
          height={cover.height}
          loading={featured ? 'eager' : (index < 2 ? 'eager' : 'lazy')}
          fetchPriority={featured && index === 0 ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={loaded ? 'is-loaded' : ''}
        />
        {/* overlay for placeholder images */}
        {!cover.caption && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.45)',
              color: '#fff',
              fontSize: '1.2rem',
              pointerEvents: 'none',
              opacity: loaded ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            Coming soon
          </div>
        )}
      </figure>
      <div className="case-study-card-top">
        <span className="case-study-icon" aria-hidden="true"><Icon size={22}/></span>
        <span className="case-study-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="case-study-category">{project.category}</p>
      <Title>{project.name}</Title>
      <p className="case-study-summary">{project.summary}</p>
      <dl className="case-study-architecture">
        <dt>{project.architecture[1]}</dt>
        <dd>{project.architecture[0]}</dd>
      </dl>
      <ul aria-label="What we built">{project.scope.map(item => <li key={item}>{item}</li>)}</ul>
      <a className="home-text-link" href={caseStudyHref(project.slug)} aria-label={'Read case study for ' + project.name}>
        Read case study <ArrowUpRight size={16}/>
      </a>
    </div>
  </article>;
}
