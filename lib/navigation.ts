export type NavLink={title:string;href:string};
export type NavGroup=NavLink&{description:string;icon:string;links:NavLink[]};
export type NavMenu=NavLink&{description:string;mega:boolean;groups:NavGroup[]};
const slug=(text:string)=>text.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const group=(root:string,path:string,title:string,description:string,icon:string,items:string[]):NavGroup=>({title,description,icon,href:`/${root}/${path}`,links:items.map(title=>({title,href:`/${root}/${path}/${slug(title)}`}))});
const flat=(root:string,items:[string,string][]):NavLink[]=>items.map(([title,path])=>({title,href:`/${root}/${path}`}));
export const companySections = [
 ['About AayaamX','about'],['Our Story','our-story'],['Vision & Mission','vision-mission'],
 ['Our Approach','our-approach'],['Technology Expertise','technology-expertise'],
 ['Leadership & Team','leadership-team'],['Careers','careers'],['Contact Us','contact'],
] as const;
export function getLegacyCompanySection(path:string) {
 return companySections.find(([,id])=>path===`/company/${id}`);
}
export const navigation:NavMenu[]=[
 {title:'Services',href:'/services',description:'Engineering expertise for every stage of your product.',mega:true,groups:[
 group('services','software-engineering','Software Engineering','Custom applications and platforms built for your business.','code',['Custom Software Development','SaaS Development','Web Application Development','Mobile App Development']),
 group('services','ai-automation','AI & Automation','Intelligent tools that simplify work and unlock new possibilities.','brain',['AI Agent Development','Generative AI Solutions','Machine Learning','Business Process Automation']),
 group('services','blockchain','Blockchain Development','Connected digital assets and decentralized applications.','blocks',['Smart Contract Development','Web3 Development','Digital Wallet Development','DeFi Development']),
 group('services','trading-technology','Trading Technology','Reliable systems for brokers and trading businesses.','chart',['Forex CRM Development','Broker Backoffice Development','Trading Platform Integration','FIX API Integration','Liquidity Integration']),
 group('services','cloud-infrastructure','Cloud & Infrastructure','The infrastructure that connects and runs your software.','cloud',['Cloud Engineering','DevOps & CI/CD','API Development','System Integration']),
 group('services','product-engineering','Product Engineering','From first idea to launch and continuous improvement.','layers',['Product Strategy','UI/UX Engineering','MVP Development','Product Modernization'])]},
 {title:'Solutions',href:'/solutions',description:'Connected technology shaped around your business needs.',mega:true,groups:[
 group('solutions','fintech','Fintech Solutions','Track payments, manage customer accounts and automate finance reviews.','wallet',['Digital Payments','Financial Platforms','Financial Automation']),
 group('solutions','forex-brokerage','Forex & Brokerage Solutions','Connect trader onboarding, account operations and partner referrals.','chart',['Broker Infrastructure','Brokerage CRM Ecosystem','IB & Affiliate Management']),
 group('solutions','prop-trading','Prop Trading Solutions','Run challenges, track trader progress and review payout requests.','chart',['Evaluation Platforms','Challenge Management','Trader Dashboards','Payout Management']),
 group('solutions','blockchain','Blockchain Solutions','Issue tokens, connect wallets and trace digital asset transfers.','blocks',['Digital Assets','Tokenization','Decentralized Platforms','Wallet Infrastructure']),
 group('solutions','enterprise','Enterprise Solutions','Connect customer records, approvals and reporting across teams.','building',['Enterprise CRM','ERP Systems','Workflow Automation','Business Intelligence']),
 group('solutions','ai-business','AI Business Solutions','Draft replies, process documents and find answers in company knowledge.','brain',['Intelligent Assistants','AI Analytics','AI Workflow Automation','Knowledge Management Systems'])]},
 {title:'Industries',href:'/industries',description:'Technology tailored to your industry.',mega:false,groups:[{title:'Industries',href:'/industries',description:'',icon:'building',links:flat('industries',[
 ['Financial Services','financial-services'],['Forex & Brokerage','forex-brokerage'],['Proprietary Trading Firms','prop-trading'],['Banking & Fintech','banking-fintech'],['Blockchain & Web3','blockchain-web3'],['SaaS & Technology Startups','saas-technology-startups'],['Enterprise Businesses','enterprise-businesses'],['Digital Asset Businesses','digital-asset-businesses']])}]},
 {title:'Products',href:'/products',description:'Explore AayaamX platforms for brokerage, AI, enterprise SaaS and digital assets.',mega:true,groups:[{title:'Product Platforms',href:'/products',description:'Find a platform for your workflows and discuss how we can tailor it to your business.',icon:'layers',links:flat('products',[
 ['AI-Powered Products','ai-powered'],['Forex CRM Platform','forex-crm'],['Broker Backoffice Platform','broker-backoffice'],['Prop Trading Management Platform','prop-trading-management'],['Enterprise SaaS Products','enterprise-saas'],['Blockchain & Wallet Platforms','blockchain-wallet'],['Custom Product Ecosystems','custom-product-ecosystems']])}]},
 {title:'Company',href:'/company',description:'Get to know AayaamX Technologies.',mega:false,groups:[{title:'Company',href:'/company',description:'',icon:'compass',links:companySections.map(([title,id])=>({title,href:`/company#${id}`}))}]}
];
export const resources:NavLink[]=[
 ...flat('resources',[['Blog & Insights','blog-insights'],['Technology Articles','technology-articles']]),
 {title:'Case Studies',href:'/portfolio'},
 ...flat('resources',[['Whitepapers','whitepapers'],['Industry Reports','industry-reports'],['FAQs','faqs'],['Documentation','documentation']]),
];
export type NavigationPage=NavLink&{section:string;description:string;children:NavLink[];kind:'general'|'product'|'resource'};
export function navigationPages():NavigationPage[]{
 const map=new Map<string,NavigationPage>();
 for(const menu of navigation){const kind=menu.title==='Products'?'product':'general';map.set(menu.href,{...menu,section:menu.title,children:menu.groups.length===1?menu.groups[0].links:menu.groups,kind});for(const g of menu.groups){if(g.href!==menu.href)map.set(g.href,{...g,section:menu.title,children:g.links,kind});for(const link of g.links){if(!link.href.includes('#'))map.set(link.href,{...link,section:menu.title,description:g.description||menu.description,children:[],kind});}}}
 map.set('/resources',{title:'Resources',href:'/resources',section:'Resources',description:'Insights, guides and practical technology resources.',children:resources,kind:'resource'});
 for(const link of resources)if(link.href.startsWith('/resources/'))map.set(link.href,{...link,section:'Resources',description:'Practical resources for planning and delivering software.',children:[],kind:'resource'});
 return [...map.values()];
}
