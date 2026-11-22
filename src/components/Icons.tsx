import type { ReactNode } from "react";

const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const make = (d: ReactNode) => function Icon({ size = 22 }: { size?: number }) {
  return <svg {...base} width={size} height={size}>{d}</svg>;
};

export const HomeIcon = make(<><path d="M4 11.5 12 5l8 6.5" /><path d="M6 10v9h12v-9" /></>);
export const NearbyIcon = make(<><circle cx="12" cy="12" r="2.2" /><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.6 4.6a10.5 10.5 0 0 0 0 14.8M19.4 4.6a10.5 10.5 0 0 1 0 14.8" /></>);
export const InsightsIcon = make(<><path d="M5 19V11M12 19V5M19 19v-6" /></>);
export const SendIcon = make(<><path d="M5 12h14M13 6l6 6-6 6" /></>);
export const RequestIcon = make(<><path d="M19 12H5M11 6l-6 6 6 6" /></>);
export const ScanIcon = make(<><path d="M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3M8 12h8" /></>);
export const MoreIcon = make(<><circle cx="6" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></>);
export const BackIcon = make(<path d="M15 5l-7 7 7 7" />);
export const BellIcon = make(<><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" /><path d="M10 21h4" /></>);
export const FaceIcon = make(<><path d="M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3" /><path d="M9 10v1.5M15 10v1.5M9.5 15a3.5 3.5 0 0 0 5 0" /></>);

export const Logo = ({ size = 132 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 132 132" fill="none">
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#6a96ff" />
        <stop offset="1" stopColor="#1747e0" />
      </linearGradient>
    </defs>
    <circle cx="66" cy="66" r="62" stroke="rgba(255,255,255,.08)" />
    <circle cx="66" cy="66" r="44" stroke="rgba(255,255,255,.14)" />
    <circle cx="66" cy="66" r="26" stroke="rgba(255,255,255,.3)" />
    <circle cx="66" cy="66" r="11" fill="url(#lg)" />
    <circle cx="100" cy="36" r="5" fill="#fff" />
  </svg>
);
