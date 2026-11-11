'use client';

import { useState } from 'react';
import { ArrowRight, Check, Layers3, RotateCcw } from 'lucide-react';
import type { ProductPreviewData } from '@/lib/product-previews';
import styles from './ProductPlatformPage.module.css';

export default function ProductWorkflowPreview({ preview, steps }: {
  preview: ProductPreviewData;
  steps: readonly (readonly [string, string])[];
}) {
  const [step, setStep] = useState(0);
  const finished = step === steps.length - 1;

  return <section className={styles.preview} aria-labelledby="product-preview">
    <div className={styles.previewHead}>
      <Layers3 size={22} aria-hidden="true"/>
      <div><small>Interactive Example</small><h2 id="product-preview">{preview.title}</h2></div>
    </div>
    <ol className={styles.steps} aria-label="Workflow steps">
      {steps.map(([title], index) => <li key={title}>
        <button type="button" aria-pressed={step === index} onClick={() => setStep(index)}>{title}</button>
      </li>)}
    </ol>
    <div aria-live="polite" aria-atomic="true">
      <div key={step} className={styles.record}>
        <small>{preview.reference}</small>
        <h3>{preview.states[step]}</h3>
        <p>{steps[step][1]}</p>
        <p className={styles.recordDetail}><Check size={16} aria-hidden="true"/>{preview.records[step]}</p>
      </div>
    </div>
    <button className={styles.advance} type="button" onClick={() => setStep(finished ? 0 : step + 1)}>
      {finished ? 'Restart Example' : preview.actions[step]}
      {finished ? <RotateCcw size={15} aria-hidden="true"/> : <ArrowRight size={16} aria-hidden="true"/>}
    </button>
  </section>;
}
