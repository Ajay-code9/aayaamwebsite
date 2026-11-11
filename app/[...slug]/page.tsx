import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import { contactIntro } from '@/components/ContactContent';
import CompanyPage from '@/components/CompanyPage';
import { companyPages, getCompanyPage } from '@/lib/company-pages';
import ArticleContent from '@/components/ArticleContent';
import WebDevelopmentPage from '@/components/WebDevelopmentPage';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import EngineeringPage from '@/components/EngineeringPage';
import AIServicePage from '@/components/AIServicePage';
import BlockchainServicePage from '@/components/BlockchainServicePage';
import TradingServicePage from '@/components/TradingServicePage';
import DeliveryServicePage from '@/components/DeliveryServicePage';
import SolutionsDirectory, { solutionsIntro } from '@/components/SolutionsDirectory';
import SolutionHub from '@/components/SolutionHub';
import FintechSolutionPage from '@/components/FintechSolutionPage';
import BrokerageSolutionPage from '@/components/BrokerageSolutionPage';
import PropTradingSolutionPage from '@/components/PropTradingSolutionPage';
import BlockchainSolutionPage from '@/components/BlockchainSolutionPage';
import EnterpriseSolutionPage from '@/components/EnterpriseSolutionPage';
import AIBusinessSolutionPage from '@/components/AIBusinessSolutionPage';
import FinancialServicesPage, { financialServicesIntro } from '@/components/FinancialServicesPage';
import { getIndustryPage } from '@/lib/industry-pages';
import ProductPlatformPage from '@/components/ProductPlatformPage';
import AIProductPage from '@/components/AIProductPage';
import BackofficeProductPage from '@/components/BackofficeProductPage';
import { getProductPage, productsIntro } from '@/lib/product-pages';
import { getSolutionPage } from '@/lib/solutions';
import { getDeliveryService } from '@/lib/delivery-services';
import { getTradingService } from '@/lib/trading-services';
import { getAIService } from '@/lib/ai-services';
import { getBlockchainService } from '@/lib/blockchain-services';
import { getEngineeringPage } from '@/lib/software-engineering';
import { getServiceData } from '@/lib/services-data';
import { companySections, getLegacyCompanySection, navigationPages } from '@/lib/navigation';
import { articleHref, articles } from '@/lib/articles';
import { legalPages } from '@/lib/legal-pages';
import LegalPageContent from '@/components/LegalPageContent';
import PortfolioPage, { metadata as portfolioMetadata } from '@/app/portfolio/page';
import { getResourceGuide } from '@/lib/resource-guides';

const aliasPages = [
  { href: '/crm-trading', title: 'Forex CRM & Prop Firm Trading Platform Solutions' },
  { href: '/custom-software-development', title: 'Custom Software Development & Enterprise Architecture' },
  { href: '/mobile-apps', title: 'Mobile App Development (iOS & Android)' },
  { href: '/apis', title: 'API Development & Backend Engineering' },
  { href: '/services/mobile-dev-android-and-ios-app-development', title: 'Mobile App Development (iOS & Android)' },
  { href: '/services/ai-auto-ai-automation', title: 'AI & Automation Solutions' },
  { href: '/services/web-dev-custom-website-development', title: 'Web Application Development' },
  { href: '/services/web-development', title: 'Web Application Development' },
];

const insightsHref = '/resources/blog-insights';
type RouteProps = { params:Promise<{ slug:string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  const paths = [
    ...navigationPages().map(page => page.href),
    '/resources/case-studies',
    ...companySections.map(([, id]) => '/company/' + id),
    ...articles.map(article => articleHref(article.slug)),
    ...legalPages.map(page => page.href),
    ...aliasPages.map(alias => alias.href),
  ];
  return paths.map(path => ({slug:path.slice(1).split('/')}));
}

export async function generateMetadata({params}:RouteProps) {
  const path = '/' + (await params).slug.join('/');
  if (path === '/resources/case-studies') return portfolioMetadata;
  if (path === '/company') return {title:'Company | AayaamX Technologies', description:companyPages.about.intro};
  if (path === '/company/contact') return {title:'Contact Us | AayaamX Technologies', description:contactIntro};
  const companyPage = getCompanyPage(path);
  if (companyPage) return {title:companyPage.title + ' | AayaamX Technologies', description:companyPage.intro};
  if (path === '/products') return {title:'Product Platforms | AayaamX Technologies', description:productsIntro};
  const product = getProductPage(path);
  if (product) return {title:product.title + ' | AayaamX Technologies', description:product.intro};
  if (path === '/industries/financial-services') {
    return {title:'Financial Services Software | AayaamX Technologies', description:financialServicesIntro};
  }
  const industry = getIndustryPage(path);
  if (industry) return {title:industry.name + ' Software | AayaamX Technologies', description:industry.intro};
  if (path === '/solutions') return {title:'Business Software Solutions | AayaamX Technologies', description:solutionsIntro};
  const solution = getSolutionPage(path);
  if (solution) return {title:solution.title + ' | AayaamX Technologies', description:solution.intro};
  const deliveryService = getDeliveryService(path);
  if (deliveryService) return {title:deliveryService.name + ' | AayaamX Technologies', description:deliveryService.intro};
  const tradingService = getTradingService(path);
  if (tradingService) return {title:tradingService.name + ' | AayaamX Technologies', description:tradingService.intro};
  const blockchainService = getBlockchainService(path);
  if (blockchainService) return {title:blockchainService.name + ' | AayaamX Technologies', description:blockchainService.intro};
  const aiService = getAIService(path);
  if (aiService) return {title:aiService.name + ' | AayaamX Technologies', description:aiService.intro};
  const engineering = getEngineeringPage(path);
  if (engineering) return {title:engineering.name + ' | AayaamX Technologies', description:engineering.intro};
  const article = articles.find(item => articleHref(item.slug) === path);
  const alias = aliasPages.find(item => item.href === path);
  const page = legalPages.find(item => item.href === path) ?? navigationPages().find(item => item.href === path);
  if (page && 'section' in page && page.section === 'Services' && page.children.length > 0) {
    return {title:page.title + ' | AayaamX Technologies', description:page.description};
  }
  
  if (path.startsWith('/services/') || alias) {
    const serviceData = getServiceData(path);
    if (serviceData) {
      return {
        title: serviceData.title + ' | AayaamX Technologies',
        description: serviceData.tagline,
      };
    }
  }

  return {
    title: (article?.title ?? alias?.title ?? page?.title ?? 'Home') + ' | AayaamX Technologies',
    description: article?.summary ?? getResourceGuide(path)?.intro ?? (path === insightsHref ? 'Practical perspectives from AayaamX on building AI, trading and blockchain products.' : page?.description),
  };
}

export default async function NavigationDestination({params}:RouteProps) {
  const path = '/' + (await params).slug.join('/');
  if (path === '/resources/case-studies') return <PortfolioPage/>;
  const legacyCompany = getLegacyCompanySection(path);
  if (legacyCompany) permanentRedirect('/company#' + legacyCompany[1]);
  if (path === '/company') return <CompanyPage/>;
  const article = articles.find(item => articleHref(item.slug) === path);
  const legal = legalPages.find(item => item.href === path);
  if (legal) return <><Navbar/><main><LegalPageContent page={legal}/></main><SiteFooter/></>;
  const alias = aliasPages.find(item => item.href === path);
  const page = navigationPages().find(item => item.href === path);
  
  if (!article && !page && !alias) notFound();

  if (path === '/products') return <ProductPlatformPage/>;
  const product = getProductPage(path);
  if (product?.href === '/products/ai-powered') return <AIProductPage intro={product.intro}/>;
  if (product?.href === '/products/broker-backoffice') return <BackofficeProductPage intro={product.intro}/>;
  if (product) return <ProductPlatformPage product={product}/>;

  if (path === '/industries/financial-services') return <FinancialServicesPage/>;
  const industry = getIndustryPage(path);
  if (industry) return <FinancialServicesPage industry={industry}/>;

  if (path === '/solutions') return <SolutionsDirectory/>;
  const solution = getSolutionPage(path);
  if (solution && !solution.link) return <SolutionHub data={solution}/>;
  switch (solution?.key) {
    case 'fintech': return <FintechSolutionPage data={solution}/>;
    case 'forex-brokerage': return <BrokerageSolutionPage data={solution}/>;
    case 'prop-trading': return <PropTradingSolutionPage data={solution}/>;
    case 'blockchain': return <BlockchainSolutionPage data={solution}/>;
    case 'enterprise': return <EnterpriseSolutionPage data={solution}/>;
    case 'ai-business': return <AIBusinessSolutionPage data={solution}/>;
  }

  const deliveryService = getDeliveryService(path);
  if (deliveryService) return <DeliveryServicePage service={deliveryService}/>;

  const tradingService = getTradingService(path);
  if (tradingService) return <TradingServicePage service={tradingService}/>;

  const blockchainService = getBlockchainService(path);
  if (blockchainService) return <BlockchainServicePage service={blockchainService}/>;

  const aiService = getAIService(path);
  if (aiService) return <AIServicePage service={aiService}/>;

  const engineering = getEngineeringPage(path);
  if (engineering) return <EngineeringPage data={engineering}/>;
  if (path === '/services' || (page?.section === 'Services' && page.children.length > 0)) {
    return <SolutionsDirectory servicesPath={path}/>;
  }

  // Web Application Development specialized page
  if (
    path === '/services/web-dev-custom-website-development' ||
    path === '/services/web-development'
  ) {
    return <WebDevelopmentPage />;
  }

  // Any Service page or Service alias
  if (path.startsWith('/services/') || alias) {
    const serviceData = getServiceData(path);
    if (serviceData) {
      return <ServiceDetailPage data={serviceData} />;
    }
  }

  const guide = getResourceGuide(path);
  let content;
  if (article) content = <ArticleContent article={article}/>;
  else if (path === insightsHref || path === '/resources/technology-articles') content = <section className="navigation-destination">
    <h1>{page?.title}</h1><p className="destination-description">Practical perspectives on building digital products.</p>
    <div className="insight-grid">{articles.map(item => <Link className="insight-card" key={item.slug} href={articleHref(item.slug)}>
      <div className="insight-image"><img src={'/insight-' + item.art + '.svg'} width="900" height="560" alt=""/></div>
      <span>{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p><strong>Read article ↗</strong>
    </Link>)}</div>
  </section>;
  else if (guide || path === '/resources') content = <section className="navigation-destination">
    <nav aria-label="Breadcrumb" className="destination-breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span>
      {guide ? <Link href="/resources">Resources</Link> : <span>Resources</span>}
    </nav>
    <h1>{page?.title}</h1>
    <p className="destination-description">{guide?.intro ?? page?.description}</p>
    {guide ? <div className="insight-grid resource-guide-grid">{guide.entries.map(([title,body,href,label]) =>
      <article className="insight-card" key={title}>
        <h2>{title}</h2><p>{body}</p>
        {href && <Link className="home-text-link" href={href}>{label} <span aria-hidden="true">↗</span></Link>}
      </article>
    )}</div> : <nav className="destination-topics" aria-label="Resource topics">
      {page?.children.map(link => <Link href={link.href} key={link.href}>{link.title}<span aria-hidden="true">↗</span></Link>)}
    </nav>}
  </section>;
  else if (page) content = <section className="navigation-destination">
    <nav aria-label="Breadcrumb" className="destination-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.section}</span></nav>
    <p className="destination-status">PAGE IN PREPARATION</p><h1>{page.title}</h1><p className="destination-description">{page.description}</p>
    {page.children.length > 0 && <nav aria-label={page.title + ' topics'} className="destination-topics">{page.children.map(link => <Link key={link.href} href={link.href}>{link.title}<span aria-hidden="true">↗</span></Link>)}</nav>}
    <Link className="primary-button destination-home" href="/">Back to homepage <span aria-hidden="true">→</span></Link>
  </section>;

  return <><Navbar/><main>{content}</main><SiteFooter/></>;
}
