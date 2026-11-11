import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './homepage.css';
import './theme.css';
const geistSans = localFont({src:'./fonts/geist-sans-latin.woff2',weight:'100 900',variable:'--geist-sans',display:'swap'});
export const metadata: Metadata = { title: 'AayaamX Technologies | Engineering What’s Next', description: 'Intelligent digital ecosystems across AI, Fintech, Blockchain and Enterprise Software.' };
const restoreTheme = "try{var t=localStorage.getItem('aayaamx-theme');if(t==='light'){document.documentElement.dataset.theme='light';}else{document.documentElement.dataset.theme='dark';}}catch{document.documentElement.dataset.theme='dark';}";
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={geistSans.variable} data-theme="dark" suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{__html:restoreTheme}}/>
      <link rel="preload" href="/case-studies/succeed-capital-fx-overview.webp" as="image" type="image/webp"/>
    </head>
    <body>{children}</body>
  </html>;
}

