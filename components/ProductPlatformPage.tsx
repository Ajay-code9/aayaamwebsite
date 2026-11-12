import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';
import { getProductPage, productLinks, productsIntro, type ProductPageData } from '@/lib/product-pages';
import { caseStudies, caseStudyHref, caseStudyMedia } from '@/lib/portfolio';
import { getProductPreview } from '@/lib/product-previews';
import ProductWorkflowPreview from './ProductWorkflowPreview';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import styles from './ProductPlatformPage.module.css';

export default function ProductPlatformPage({ product }: { product?: ProductPageData }) {
  const project = product?.project && caseStudies.find(item => item.slug === product.project);
  const preview = product && getProductPreview(product.href);

  return <>
    <Navbar/>
    <main className={styles.page} data-product-platform={product?.href ?? ''}>
      <div className={styles.inner}>
        <nav className={styles.crumb} aria-label="Breadcrumb">
          {product ? <><Link href="/products">Products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.title}</span></> :
            <span aria-current="page">Products</span>}
        </nav>
        <header className={styles.hero}>
          <div>
            {product && <p className={styles.label}>{product.title}</p>}
            <h1>{product?.headline ?? 'Platforms Built Around How Your Business Works.'}</h1>
            <p className={styles.lead}>{product?.intro ?? productsIntro}</p>
            {product ? <Link className={styles.button} href="/company#contact">Request a Platform Consultation <ArrowUpRight size={17} aria-hidden="true"/></Link> :
              <a className={styles.button} href="#product-catalogue">Explore Platforms <ArrowRight size={17} aria-hidden="true"/></a>}
          </div>
          {product && preview ? <ProductWorkflowPreview key={product.href} preview={preview} steps={product.demo}/> :
            <div className={styles.art} aria-hidden="true"><span/><span/><span><Layers3 size={66} strokeWidth={1.3}/></span></div>}
        </header>

        {product && <>
          <section className={styles.section} aria-labelledby="product-modules">
            <h2 id="product-modules">What We Can Build</h2>
            <p>{product.audience}</p>
            <div className={styles.modules}>{product.modules.map(([title, description]) =>
              <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
          </section>
          <section className={styles.integration} aria-labelledby="product-integration">
            <div><h2 id="product-integration">Scope Your First Release</h2><p>{product.integration}</p>
              <Link className={styles.button} href="/company#contact">Plan Your First Release <ArrowUpRight size={16} aria-hidden="true"/></Link>
            </div>
            <div><details><summary>{product.question}</summary><p>{product.answer}</p></details>
              <details><summary>How do we start?</summary><p>We review your current tools and agree which users, workflows and integrations the first release needs.</p></details>
              <details><summary>How do you scope and price an implementation?</summary><p>We review the features, integrations and rollout you need, then propose an implementation scope and quote.</p></details>
              <Link href={product.related}>Explore the Related Offering <ArrowUpRight size={16} aria-hidden="true"/></Link>
            </div>
          </section>
          {project && <section className={styles.project} aria-labelledby="product-project">
            <figure style={{ height: 'auto', aspectRatio: 'auto', alignSelf: 'center', overflow: 'hidden', lineHeight: 0 }}>
              <img
                src={caseStudyMedia(project.slug).cover.src}
                alt={caseStudyMedia(project.slug).cover.caption || project.name}
                width={caseStudyMedia(project.slug).cover.width}
                height={caseStudyMedia(project.slug).cover.height}
                loading="lazy"
                decoding="async"
                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </figure>
            <div><p className={styles.label}>Selected Work</p><h2 id="product-project">{project.name}</h2><p>{project.summary}</p>
              <a href={caseStudyHref(project.slug)}>Read the Case Study <ArrowUpRight size={16} aria-hidden="true"/></a></div>
          </section>}
        </>}

        <section className={styles.section} id="product-catalogue" aria-labelledby="product-catalogue-title">
          <h2 id="product-catalogue-title">{product ? 'Explore Other Platforms' : 'Find the Platform You Need'}</h2>
          <ul className={styles.catalogue}>{productLinks.filter(item => item.href !== product?.href).map(item =>
            <li key={item.href}><Link href={item.href}><strong>{item.title}</strong><ArrowUpRight size={18} aria-hidden="true"/>
              {!product && <p>{getProductPage(item.href)?.intro}</p>}
            </Link></li>)}</ul>
        </section>
      </div>
    </main>
    <SiteFooter/>
  </>;
}
