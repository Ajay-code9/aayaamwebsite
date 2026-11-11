import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Blocks, Layers3, Compass, Cloud, Code2, Wallet, Building2, type LucideIcon } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import ArchitectureHero, { ArchitectureSteps } from './ArchitectureHero';
import styles from './SolutionPage.module.css';

const groupIcons: Record<string, LucideIcon> = {
  code: Code2,
  brain: BrainCircuit,
  blocks: Blocks,
  chart: ChartNoAxesCombined,
  cloud: Cloud,
  layers: Layers3,
  wallet: Wallet,
  building: Building2,
  compass: Compass,
};

export const solutionsIntro = 'Explore software for payments, brokerage operations, trader evaluations, digital assets, enterprise workflows and AI-assisted work.';

export default function SolutionsDirectory({ servicesPath }: { servicesPath?: string }) {
  const root = servicesPath ? '/services' : '/solutions';
  const menu = navigation.find(item => item.href === root)!;
  const category = menu.groups.find(item => item.href === servicesPath);
  const groups = category ? [category] : menu.groups;
  const title = category?.title ?? (servicesPath ? 'Software Engineering Services' : 'Business Software Solutions');
  const intro = category?.description ?? (servicesPath ? menu.description : solutionsIntro);

  return <>
    <Navbar/>
    <main className={styles.page} data-solutions-directory="">
      <ArchitectureHero trail={category ? [[menu.title, root]] : [['Home', '/']]}
        label={category?.title ?? menu.title} title={title} intro={intro}
        jump={[servicesPath ? 'Explore Services' : 'Explore Solutions', '#architecture-directory']}
        preview={<ArchitectureSteps title={servicesPath ? 'How We Deliver' : 'Where to Start'}
          steps={servicesPath ? ['Define the requirements', 'Build and review', 'Launch and hand over'] : ['Choose a business area', 'Review the workflow and scope', 'Discuss your project']}/>}
      />
      <div className={styles.inner}>
        <div id="architecture-directory" className={styles.familyGrid}>
          {groups.map(group => {
            const Icon = (group.icon && groupIcons[group.icon]) || Layers3;
            return (
              <section key={group.href} className={styles.familyCard}>
                <div className={styles.familyCardHeader}>
                  <span className={styles.familyCardIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h2>
                    {category ? (
                      'Explore ' + group.title
                    ) : (
                      <Link href={group.href} className={styles.familyCardTitleLink}>
                        <span>{group.title}</span>
                        <ArrowUpRight size={18} className={styles.familyCardTitleArrow} aria-hidden="true"/>
                      </Link>
                    )}
                  </h2>
                </div>
                <p className={styles.familyCardDesc}>{group.description}</p>
                <ul className={styles.familyCardList}>
                  {group.links.map(link => (
                    <li key={link.href} className={styles.familyCardItem}>
                      <Link href={link.href} className={styles.familyCardLink}>
                        <span className={styles.familyCardLinkDot} aria-hidden="true" />
                        <span className={styles.familyCardLinkText}>{link.title}</span>
                        <ArrowUpRight size={14} className={styles.familyCardArrow} aria-hidden="true"/>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
