'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowRight,Check,Copy,Download,Mail,X} from 'lucide-react';
import {company} from '@/lib/company';
export function ProjectBriefForm(){
 const [brief,setBrief]=useState('');const [copied,setCopied]=useState(false);
 const download=()=>{const url=URL.createObjectURL(new Blob([brief],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='aayaamx-project-brief.txt';a.click();URL.revokeObjectURL(url);};
 return <form className="project-form" onSubmit={event=>{event.preventDefault();const data=new FormData(event.currentTarget);setBrief(`AayaamX project enquiry\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nInterest: ${data.get('interest')}\n\nProject details:\n${data.get('project')}`);setCopied(false);}}>
 <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Full name"/></label><label>Work email<input type="email" name="email" autoComplete="email" required placeholder="you@company.com"/></label></div>
 <label>I’m interested in<select name="interest"><option>Software & Product Development</option><option>AI & Automation</option><option>Fintech & Trading</option><option>Blockchain & Web3</option><option>Cloud & Integration</option></select></label>
 <label>What would you like to build?<textarea required name="project" rows={4} placeholder="Tell us about your idea, goals and timeline…"/></label>
 <button className="primary-button" type="submit">Prepare my enquiry<ArrowRight size={16}/></button>
 {brief&&<div className="prepared-enquiry" role="status"><strong>Your enquiry is ready.</strong><p>Continue in your email app to review and send it to {company.email}.</p><a className="primary-button" href={`mailto:${company.email}?subject=${encodeURIComponent('Project enquiry — AayaamX')}&body=${encodeURIComponent(brief)}`}><Mail size={16}/>Continue in email app</a><div className="brief-tools"><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(brief);setCopied(true);}catch{download();}}}>{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'Copied':'Copy brief'}</button><button type="button" onClick={download}><Download size={14}/>Download brief</button></div></div>}
 <small className="form-explanation">This form prepares an email draft. Nothing is sent automatically. You can also email us directly at <a href={`mailto:${company.email}`}>{company.email}</a>.</small>
 </form>;
}
export default function ProjectEnquiry({open,onClose}:{open:boolean;onClose:()=>void}){const dialog=useRef<HTMLDialogElement>(null);useEffect(()=>{if(open)dialog.current?.showModal();else dialog.current?.close();},[open]);return <dialog ref={dialog} className="contact-dialog" aria-label="Start a project with AayaamX" onCancel={onClose} onClick={event=>{if(event.target===dialog.current)onClose();}}><div className="contact-inner"><button className="close-dialog" aria-label="Close project enquiry" onClick={onClose}><X/></button><div className="eyebrow"><span/> LET’S BUILD TOGETHER</div><h2>Your idea.<br/>Our next conversation.</h2><p>Share what you want to build. We’ll help you shape the next step.</p><ProjectBriefForm/></div></dialog>;}
