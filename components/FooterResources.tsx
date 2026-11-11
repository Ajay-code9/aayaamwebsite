import Link from 'next/link';
import {resources} from '@/lib/navigation';
export default function FooterResources(){return <nav className="footer-resources" aria-label="Resources"><Link href="/resources" className="resources-heading">Resources</Link><div>{resources.map(link=><Link key={link.href} href={link.href}>{link.title}</Link>)}</div></nav>;}
