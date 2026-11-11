'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {useInView,useReducedMotion} from 'framer-motion';
import {ArrowUpRight,BrainCircuit,Blocks,ChartNoAxesCombined,Cloud,Code2,Layers3,Play} from 'lucide-react';
import {navigation} from '@/lib/navigation';

const Scene=dynamic(()=>import('./ServiceWorkbenchScene'),{ssr:false});
const demos=[
  {icon:Code2, stages:['Business dashboard','Mobile app connected','Ready to use']},
  {icon:BrainCircuit, stages:['Request received','Draft prepared','Ready for review']},
  {icon:Blocks, stages:['Asset selected','Transfer in progress','Transfer confirmed']},
  {icon:ChartNoAxesCombined, stages:['Order received','Order routed','Status updated']},
  {icon:Cloud, stages:['One server active','Demand increases','Work shared across servers']},
  {icon:Layers3, stages:['Idea sketched','Prototype built','Ready to launch']},
];
const services=navigation[0].groups;

export default function ServiceWorkbench({brokeragePreview}:{brokeragePreview:ReactNode}){
  const [selected,setSelected]=useState(3);
  const [showDashboard,setShowDashboard]=useState(true);
  const [step,setStep]=useState(0);
  const [run,setRun]=useState(0);
  const stage=useRef<HTMLDivElement>(null);
  const mounted=useInView(stage,{once:true,margin:'160px'});
  const inView=useInView(stage,{amount:.1});
  const reduced=useReducedMotion()===true;
  const service=services[selected];
  const demo=demos[selected];
  const Icon=demo.icon;

  useEffect(()=>{
    if (!run || reduced) return;
    const first=window.setTimeout(()=>setStep(1),900);
    const second=window.setTimeout(()=>setStep(2),1850);
    return ()=>{window.clearTimeout(first);window.clearTimeout(second);};
  },[run,selected,reduced]);

  const play=()=>{setShowDashboard(false);setStep(reduced?2:0);setRun(value=>value+1);};
  const select=(index:number)=>{
    if (index===selected) return;
    setSelected(index);
    play();
  };
  const fallback=<div className="workbench-fallback"><Icon size={64} strokeWidth={1.3}/><span>{service.title}</span></div>;

  return <div className="service-workbench">
    <div className="workbench-selector" aria-label="Select a service" role="group">
      {services.map((item,index)=>{
        const ServiceIcon=demos[index].icon;
        return <button key={item.href} type="button" onClick={()=>select(index)} aria-pressed={selected===index}>
          <ServiceIcon size={21} strokeWidth={1.65}/><span>{item.title}</span><ArrowUpRight size={15}/>
        </button>;
      })}
    </div>
    <div className="workbench-panel">
      <div className="workbench-stage" ref={stage}>
        <div className="workbench-stage-header">
          <div className="workbench-stage-tag"><span/> {showDashboard ? 'ILLUSTRATIVE DASHBOARD' : 'INTERACTIVE SERVICE DEMO'}</div>
          {selected===3 && <button type="button" className="workbench-view-toggle" onClick={() => showDashboard ? play() : setShowDashboard(true)}>
            {showDashboard ? 'View 3D demo' : 'View dashboard'}
          </button>}
        </div>
        {showDashboard ? <div className="workbench-dashboard">{brokeragePreview}</div> : <>
          <div className="workbench-model" aria-hidden="true">
            {mounted ? <Scene service={selected} step={step} reduced={reduced||!inView} fallback={fallback}/> : fallback}
          </div>
          <ol className="workbench-progress" aria-label="Demo progress">
            {demo.stages.map((label,index)=><li key={label} aria-current={index===step?'step':undefined}>{label}</li>)}
          </ol>
        </>}
      </div>
      <div className="workbench-info">
        <div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.links.slice(0,4).map(link=><li key={link.href}>{link.title}</li>)}</ul></div>
        <div className="workbench-actions">
          <button type="button" onClick={play}><Play size={15}/> Run demo</button>
          <Link href={service.href}>Explore service <ArrowUpRight size={15}/></Link>
        </div>
      </div>
    </div>
  </div>;
}

