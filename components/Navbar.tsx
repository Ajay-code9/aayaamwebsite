'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState,type KeyboardEvent} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion';
import {ArrowUpRight,ChevronDown,Menu,X,BrainCircuit,ChartNoAxesCombined,Blocks,Layers3,Compass,Cloud,Code2,Wallet,Building2} from 'lucide-react';
import {navigation,type NavMenu,type NavGroup} from '@/lib/navigation';
import ThemeSwitch from './ThemeSwitch';
const icons={brain:BrainCircuit,chart:ChartNoAxesCombined,blocks:Blocks,layers:Layers3,compass:Compass,cloud:Cloud,code:Code2,wallet:Wallet,building:Building2};
const industryIcons: Record<string, typeof Wallet> = {
 '/industries/financial-services': Wallet,
 '/industries/forex-brokerage': ChartNoAxesCombined,
 '/industries/prop-trading': Compass,
 '/industries/banking-fintech': Building2,
 '/industries/blockchain-web3': Blocks,
 '/industries/saas-technology-startups': Code2,
 '/industries/enterprise-businesses': Layers3,
 '/industries/digital-asset-businesses': Wallet,
};
type LegacyProps={onSelect?:(index:number)=>void;onExplore?:()=>void;onContact?:()=>void};
function NavigationGroup({group,compact,expanded,toggle,close}:{group:NavGroup;compact:boolean;expanded:boolean;toggle:()=>void;close:()=>void}){
 const pathname=usePathname();const reduced=useReducedMotion();const Icon=icons[group.icon as keyof typeof icons]||Layers3;
 return <section className="mega-category">
  <span className="mega-category-watermark" aria-hidden="true"><Icon size={95} strokeWidth={1.2}/></span>
  <div className="mega-category-heading">
    <span className="mega-category-icon"><Icon size={19} strokeWidth={1.8}/></span>
    <Link href={group.href} onClick={close} className="desktop-category-title">{group.title}</Link>
    <button className="mobile-category-trigger" aria-expanded={expanded} aria-controls={`group-${group.href.replaceAll('/','-')}`} onClick={toggle}>{group.title}<ChevronDown size={13}/></button>
  </div>
  <AnimatePresence initial={false}>{(!compact||expanded)&&<motion.div id={`group-${group.href.replaceAll('/','-')}`} className="mega-category-body" initial={compact&&!reduced?{height:0,opacity:0}:false} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.18}}>
    <p>{group.description}</p>
    <ul>{group.links.map(link=><li key={link.href}><Link href={link.href} onClick={close} aria-current={pathname===link.href?"page":undefined}>
      <span className="mega-link-dot" aria-hidden="true"/>
      <span className="mega-link-text">{link.title}</span>
      <ArrowUpRight size={13} className="mega-link-arrow" aria-hidden="true"/>
    </Link></li>)}</ul>
  </motion.div>}</AnimatePresence>
 </section>;
}
export default function Navbar(_props:LegacyProps={}){
 const pathname=usePathname();const reduced=useReducedMotion();const [open,setOpen]=useState<string|null>(null);const [mobile,setMobile]=useState(false);const [compact,setCompact]=useState(false);const [expanded,setExpanded]=useState<string|null>(null);
 const isHome = pathname === '/';
 const [scrolled,setScrolled] = useState(false);
 useEffect(() => {
   if (!isHome) return;
   const update = () => setScrolled(window.scrollY > 20);
   update();
   window.addEventListener('scroll', update, {passive:true});
   return () => window.removeEventListener('scroll', update);
 }, [isHome]);
 const header=useRef<HTMLElement>(null);const triggers=useRef<Record<string,HTMLButtonElement|null>>({});const toggleRef=useRef<HTMLButtonElement>(null);const timer=useRef<ReturnType<typeof setTimeout>|null>(null);const pinned=useRef(false);const openRef=useRef<string|null>(null);
 const cancelClose=()=>{if(timer.current){clearTimeout(timer.current);timer.current=null;}};
 const close=()=>{cancelClose();openRef.current=null;pinned.current=false;setOpen(null);setExpanded(null);setMobile(false);};
 const show=(name:string)=>{cancelClose();if(openRef.current!==name){pinned.current=false;setExpanded(null);}openRef.current=name;setOpen(name);};
 const click=(name:string)=>{if(openRef.current===name&&pinned.current){openRef.current=null;setOpen(null);pinned.current=false;}else{show(name);pinned.current=true;}};
 useEffect(()=>{const q=matchMedia('(max-width: 1000px)');const change=()=>{setCompact(q.matches);setMobile(false);setOpen(null);openRef.current=null;};change();q.addEventListener('change',change);return()=>q.removeEventListener('change',change);},[]);
 useEffect(()=>{close();},[pathname]); // Route changes also restore mobile scrolling.
 useEffect(()=>{const outside=(event:PointerEvent)=>{if(header.current&&!header.current.contains(event.target as Node))close();};const escape=(event:globalThis.KeyboardEvent)=>{if(event.key!=='Escape')return;const trigger=open?triggers.current[open]:null;close();if(mobile)toggleRef.current?.focus();else trigger?.focus();};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};},[open,mobile]);
 useEffect(()=>()=>cancelClose(),[]);
 useEffect(()=>{if(!mobile)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[mobile]);
 const focusLink=(name:string,last=false)=>{setTimeout(()=>{const links=header.current?.querySelectorAll<HTMLAnchorElement>(`#nav-panel-${name} a[href]`);if(links?.length)links[last?links.length-1:0].focus();},0);};
 const triggerKeys=(event:KeyboardEvent<HTMLButtonElement>,menu:NavMenu,index:number)=>{if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();show(menu.title);pinned.current=true;focusLink(menu.title,event.key==='ArrowUp');}if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();triggers.current[navigation[(index+(event.key==='ArrowRight'?1:-1)+navigation.length)%navigation.length].title]?.focus();}};
 const panelKeys=(event:KeyboardEvent<HTMLDivElement>)=>{if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;const links=[...event.currentTarget.querySelectorAll<HTMLAnchorElement>('a[href]')].filter(el=>el.getClientRects().length>0);if(!links.length)return;event.preventDefault();const index=links.indexOf(document.activeElement as HTMLAnchorElement);const next=event.key==='Home'?0:event.key==='End'?links.length-1:(index+(event.key==='ArrowDown'?1:-1)+links.length)%links.length;links[next].focus();};
 return <header ref={header} className="navbar redesigned-navbar complete-navigation" data-home={isHome || undefined} data-glass={isHome && scrolled || undefined} onPointerEnter={cancelClose} onPointerLeave={event=>{if(compact||event.pointerType!=='mouse')return;cancelClose();timer.current=setTimeout(()=>{setOpen(null);openRef.current=null;pinned.current=false;},180);}} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node)){setOpen(null);openRef.current=null;pinned.current=false;}}}>
 <Link href="/" className="wordmark" aria-label="AayaamX Technologies home" onClick={close}><img src="/aayaamx-logo.png" alt="AayaamX Technologies" width="1168" height="359"/></Link>
 <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation ${mobile?'is-open':''}`}><Link href="/" className="nav-home-pill" aria-current={pathname==='/'?'page':undefined} onClick={close}><span/>Home</Link>
 {navigation.map((menu,index)=><div className={`navigation-group${menu.href==='/industries'?' industries-navigation-group':''}`} key={menu.title} onPointerEnter={event=>{if(!compact&&event.pointerType==='mouse')show(menu.title);}}>
 <button ref={el=>{triggers.current[menu.title]=el;}} className={`nav-trigger ${open===menu.title?'is-expanded':''} ${pathname.startsWith(menu.href)?'is-current':''}`} aria-expanded={open===menu.title} aria-controls={`nav-panel-${menu.title}`} onClick={()=>click(menu.title)} onKeyDown={event=>triggerKeys(event,menu,index)}>{menu.title}<ChevronDown size={13}/></button>
 <AnimatePresence>{open===menu.title&&<motion.div key={menu.title} id={`nav-panel-${menu.title}`} className={`nav-flyout nav-complete-panel ${menu.mega?'mega-panel':'simple-panel'} ${menu.title==='Products'?'products-panel':''}`} initial={{opacity:0,y:reduced?0:-6}} animate={{opacity:1,y:0,pointerEvents:"auto"}} exit={{opacity:0,y:reduced?0:-4,pointerEvents:"none"}} transition={{duration:reduced?0:.16}} onPointerEnter={cancelClose} onKeyDown={panelKeys}>
 {menu.mega?<div className="mega-columns">{menu.groups.map(group=><NavigationGroup key={group.href} group={group} compact={compact} expanded={expanded===group.href} toggle={()=>setExpanded(expanded===group.href?null:group.href)} close={close}/>)}</div>:<ul className="simple-nav-list">{menu.groups[0].links.map(link=>{
   const Icon=industryIcons[link.href];
   return <li key={link.href}><Link href={link.href} onClick={close} aria-current={pathname===link.href?'page':undefined}>
     {Icon&&<span className="industry-link-icon"><Icon size={16} strokeWidth={1.75} aria-hidden="true"/></span>}
     <span className="simple-nav-label">{link.title}</span><ArrowUpRight className="simple-nav-arrow" size={15} aria-hidden="true"/>
   </Link></li>;
 })}</ul>}
 </motion.div>}</AnimatePresence>
 </div>)}
 <Link href="/company#contact" className="mobile-contact" onClick={close}>Request a Consultation<ArrowUpRight size={18}/></Link></nav>
 <Link href="/company#contact" className="talk-button" onClick={close}>Request a Consultation<span><ArrowUpRight size={16}/></span></Link>
 <ThemeSwitch iconOnly={true} className="navbar-theme-toggle"/>
 <button ref={toggleRef} className="mobile-toggle" aria-label={mobile?'Close navigation':'Open navigation'} aria-expanded={mobile} aria-controls="primary-navigation" onClick={()=>{cancelClose();setMobile(!mobile);setOpen(null);openRef.current=null;}}>{mobile?<X size={21}/>:<Menu size={21}/>}</button>
 </header>;
}



