import { Activity, Building2, CalendarDays, ChartNoAxesCombined, Globe2, Layers3 } from 'lucide-react';

const STATS = [
  { label: 'Products Engineered', value: '120+', icon: Layers3, tone: 'blue' },
  { label: 'Volume Processed', value: '$380M+', icon: ChartNoAxesCombined, tone: 'green' },
  { label: 'Uptime SLA', value: '99.97%', icon: Activity, tone: 'teal' },
  { label: 'Enterprise Clients', value: '43+', icon: Building2, tone: 'indigo' },
  { label: 'Years Experience', value: '5', icon: CalendarDays, tone: 'amber' },
  { label: 'Countries Served', value: '15+', icon: Globe2, tone: 'sky' },
];

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const Icon = stat.icon;
  return (
    <span className="marquee-stat" data-tone={stat.tone}>
      <span className="marquee-stat-icon" aria-hidden="true"><Icon size={19} strokeWidth={1.85}/></span>
      <span className="marquee-stat-copy"><strong>{stat.value}</strong>{' '}{stat.label}</span>
    </span>
  );
}

export default function MarqueeStats() {
  return (
    <div className="marquee-strip" role="region" aria-label="Company-reported key statistics" tabIndex={0}>
      <div className="marquee-track">
        <div className="marquee-group">{STATS.map(stat => <StatItem key={stat.label} stat={stat}/>)}</div>
        <div className="marquee-group" aria-hidden="true">{STATS.map(stat => <StatItem key={stat.label} stat={stat}/>)}</div>
      </div>
    </div>
  );
}
