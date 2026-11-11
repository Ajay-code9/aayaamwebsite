'use client';
import { AnimatePresence, motion } from 'framer-motion';
const content = [
 {eyebrow:'AI & AUTOMATION',lines:['Smarter Tools.','Less Manual','Work.'],description:'AayaamX builds AI Tools and assistants that handle repetitive tasks, help your team work faster and make everyday business processes easier.'},
 {eyebrow:'FINTECH & TRADING',lines:['Software for','Brokers &','Trading Firms.'],description:'We build software for brokers and trading businesses—from customer management and Trading Platforms to the systems that keep daily operations running.'},
 {eyebrow:'BLOCKCHAIN & WEB3',lines:['Blockchain.','Built for','Your Business.'],description:'We build blockchain apps, digital wallets and smart contracts that help businesses manage digital assets and automate agreements.'},
 {eyebrow:'SOFTWARE & PRODUCT DEVELOPMENT',lines:['Your Idea.','Our Expertise.','Built to Grow.'],description:'AayaamX turns your idea into Custom Software, SaaS products and business platforms. We handle planning, development, launch and ongoing support.'}
];export default function HeroCopy({active,reduced}:{active:number;reduced:boolean}) {
 const copy=content[active];
 return <div className="hero-copy-stage"><AnimatePresence initial={false} mode="sync"><motion.div key={active} className="hero-copy-panel" initial="enter" animate="visible" exit="exit" variants={{enter:{opacity:reduced?1:0},visible:{opacity:1,transition:{delayChildren:reduced?0:.24,staggerChildren:reduced?0:.07}},exit:{opacity:0,y:reduced?0:-8,transition:{duration:reduced?0:.2}}}}>
 <motion.div className="eyebrow" variants={{enter:{opacity:0,y:reduced?0:8},visible:{opacity:1,y:0,transition:{duration:reduced?0:.5}}}}><span/>{copy.eyebrow}</motion.div>
 <h1 aria-label={copy.lines.join(' ')}>{copy.lines.map((line,i)=><span className="line-mask" key={i}><motion.span className={i===1?'accent-line':''} variants={{enter:{y:reduced?0:'108%',opacity:reduced?1:0},visible:{y:0,opacity:1,transition:{duration:reduced?0:.78,ease:[.22,1,.36,1]}}}}>{line}{i<copy.lines.length-1?" ":""}</motion.span></span>)}</h1>
 <motion.p className="intro" variants={{enter:{opacity:0,y:reduced?0:10},visible:{opacity:1,y:0,transition:{duration:reduced?0:.6}}}}>{copy.description}</motion.p>
 </motion.div></AnimatePresence></div>;
}


