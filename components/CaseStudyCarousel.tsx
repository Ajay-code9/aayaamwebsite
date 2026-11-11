'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/portfolio';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudyCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const visible = useInView(viewport, {amount:.25});
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const move = useCallback((direction: number) => {
    const track = viewport.current;
    if (!track || track.children.length < 2) return;
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    const step = second.offsetLeft - first.offsetLeft;
    const end = track.scrollWidth - track.clientWidth;
    const atBoundary = direction > 0 ? track.scrollLeft >= end - 2 : track.scrollLeft <= 2;
    if (atBoundary) {
      track.scrollTo({left:direction > 0 ? 0 : end, behavior:'instant'});
    } else {
      track.scrollBy({left:step * direction, behavior:reduced ? 'instant' : 'smooth'});
    }
  }, [reduced]);

  useEffect(() => {
    if (!visible || reduced || hovered || focused) return;
    const interval = window.setInterval(() => move(1), 1000);
    return () => window.clearInterval(interval);
  }, [visible, reduced, hovered, focused, move]);

  return <div className="case-study-carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocus={() => setFocused(true)} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
    }}>
    <div className="case-study-controls">
      <button type="button" aria-label="Previous case study" onClick={() => move(-1)}><ArrowLeft size={18}/></button>
      <button type="button" aria-label="Next case study" onClick={() => move(1)}><ArrowRight size={18}/></button>
    </div>
    <div className="featured-work-grid" ref={viewport} role="region" aria-label="Case study carousel" tabIndex={0}>
      {caseStudies.map((project,index) => <CaseStudyCard key={project.slug} project={project} index={index} featured/>)}
    </div>
  </div>;
}
