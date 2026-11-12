'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowRight,Check,Copy,Download,Mail,X} from 'lucide-react';
import {company} from '@/lib/company';

const projectPlanningFields = [
 {name:'budget', label:'Project Budget (USD)', options:['$5,000–$24,999','$25,000–$49,999','$50,000–$249,999','$250,000–$999,999','$1 million or more','Budget under review']},
 {name:'timeline', label:'Target Deployment', options:['As soon as possible','Within 3 months','3–6 months','More than 6 months','Timeline under review']},
 {name:'deployment', label:'Deployment Environment', options:['Cloud','On-premises','Hybrid','To be determined']},
] as const;

export function ProjectBriefForm(){
 const [brief,setBrief]=useState('');const [copied,setCopied]=useState(false);
 const download=()=>{const url=URL.createObjectURL(new Blob([brief],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='aayaamx-project-brief.txt';a.click();URL.revokeObjectURL(url);};
 return <form className="project-form" onChange={()=>setBrief('')} onSubmit={event=>{
   event.preventDefault();
   const data=new FormData(event.currentTarget);
   const planning=projectPlanningFields.map(({name,label})=>`${label}: ${data.get(name) || 'Not specified'}`);
   setBrief([
     'AayaamX project enquiry', '',
     `Name: ${data.get('name')}`,
     `Email: ${data.get('email')}`,
     `Company: ${data.get('organization') || 'Not specified'}`,
     `Interest: ${data.get('interest')}`,
     ...planning, '', 'Project details:', String(data.get('project')),
   ].join('\n'));
   setCopied(false);
 }}>
 <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Full name"/></label><label>Work email<input type="email" name="email" autoComplete="email" required placeholder="you@company.com"/></label></div>
 <div className="form-row">
   <label>Company <input name="organization" autoComplete="organization" placeholder="Company name"/></label>
   <label>I’m interested in<select name="interest"><option>Software & Product Development</option><option>AI & Automation</option><option>Fintech & Trading</option><option>Blockchain & Web3</option><option>Cloud & Integration</option></select></label>
 </div>
 <fieldset className="project-planning">
   <legend>Project Planning</legend>
   {projectPlanningFields.map(({name,label,options})=>(
     <label key={name}>{label}
       <select name={name} defaultValue="">
         <option value="">Select if known</option>
         {options.map(option=><option key={option}>{option}</option>)}
       </select>
     </label>
   ))}
 </fieldset>
 <label>What would you like to build?<textarea required name="project" rows={4} placeholder="Describe your goals, current systems and integrations…"/></label>
 <button className="primary-button" type="submit">Prepare My Project Brief<ArrowRight size={16}/></button>
 {brief&&<div className="prepared-enquiry" role="status"><strong>Your enquiry is ready.</strong><p>Continue in your email app to review and send it to {company.email}.</p><a className="primary-button" href={`mailto:${company.email}?subject=${encodeURIComponent('Project enquiry — AayaamX')}&body=${encodeURIComponent(brief)}`}><Mail size={16}/>Continue in email app</a><div className="brief-tools"><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(brief);setCopied(true);}catch{download();}}}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'Copied':'Copy brief'}</button><button type="button" onClick={download}><Download size={14}/>Download brief</button></div></div>}
 <small className="form-explanation">This form prepares an email draft. Nothing is sent automatically. You can also email us directly at <a href={`mailto:${company.email}`}>{company.email}</a>.</small>
 </form>;
}
export default function ProjectEnquiry({open,onClose}:{open:boolean;onClose:()=>void}){const dialog=useRef<HTMLDialogElement>(null);useEffect(()=>{if(open)dialog.current?.showModal();else dialog.current?.close();},[open]);return <dialog ref={dialog} className="contact-dialog" aria-labelledby="project-enquiry-title" onCancel={onClose} onClick={event=>{if(event.target===dialog.current)onClose();}}><div className="contact-inner"><button className="close-dialog" aria-label="Close project enquiry" onClick={onClose}><X/></button><h2 id="project-enquiry-title">Tell Us What You’re Building</h2><p>Share your goals, current systems and any integrations or constraints. We’ll use your brief to prepare for a technical consultation.</p><ProjectBriefForm/></div></dialog>;}
