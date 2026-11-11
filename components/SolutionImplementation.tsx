import Link from 'next/link';
import { getSolutionImplementation } from '@/lib/solution-implementation';
import { solutionDelivery } from '@/lib/solution-delivery';
import styles from './SolutionImplementation.module.css';

export default function SolutionImplementation({ href, scope, descriptions }: {
  href: string;
  scope: readonly string[];
  descriptions?: readonly string[];
}) {
  const slug = href.split('/').at(-1) ?? '';
  const implementation = getSolutionImplementation(slug);
  const delivery = solutionDelivery[slug];

  return <div className={styles.implementation} data-solution-implementation="">
    <p>The tools below are options for this build. We confirm the stack with you after reviewing your existing systems and providers.</p>
    <div className={styles.cards}>{scope.map((title, index) => {
      const [description, ...tools] = implementation?.[index] ?? [];
      return <article key={title}>
        <h3>{title}</h3>
        {(descriptions?.[index] ?? description) && <p>{descriptions?.[index] ?? description}</p>}
        {tools.length > 0 && <ul className={styles.tools} aria-label="Technology options">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>}
      </article>;
    })}</div>
    {delivery && <section className={styles.delivery} aria-labelledby="solution-delivery-title">
      <div className={styles.scenario}>
        <p>Example workflow</p>
        <h2 id="solution-delivery-title">From Requirement to First Release</h2>
        <p>{delivery[0]}</p>
        <Link href="/company#contact">Discuss Your Requirements <span aria-hidden="true">↗</span></Link>
      </div>
      <div className={styles.plan}>
        <div><h3>What the First Release Covers</h3><p>{delivery[1]}</p></div>
        <div><h3>What We’d Test Before Launch</h3><p>{delivery[2]}</p></div>
      </div>
    </section>}
  </div>;
}
