import type { Metadata } from 'next';
import LogoPreview from '@/components/LogoPreview';
import styles from './preview.module.css';

export const metadata: Metadata = { title: '3D Logo Preview | AayaamX Technologies' };

export default function LogoPreviewPage() {
  return <main className={styles.page}>
    <a className={styles.back} href="/">← AayaamX homepage</a>
    <header>
      <p className={styles.label}>AAYAAMX TECHNOLOGIES</p>
      <h1>Infinity in Motion.</h1>
    </header>
    <LogoPreview/>
  </main>;
}
