import { people } from "@/lib/data";

const MAX = 30;

export default function Radar({ activeId, onPick }: { activeId?: string; onPick?: (id: string) => void }) {
  return (
    <div className="radar">
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <defs>
          <radialGradient id="sweepFill" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#2f6bff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[190, 140, 90, 40].map((r) => (
          <circle key={r} className="radar__ring" cx="200" cy="200" r={r} />
        ))}
        <g className="radar__sweep">
          <path d="M200 200 L390 200 A190 190 0 0 0 330 66 Z" fill="url(#sweepFill)" />
        </g>
        <circle className="radar__pulse" cx="200" cy="200" r="190" fill="none" stroke="#6a96ff" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="9" fill="#fff" />
        {people.map((p) => {
          const r = 40 + (p.distance / MAX) * 140;
          const a = (p.angle * Math.PI) / 180;
          const x = 200 + r * Math.cos(a);
          const y = 200 + r * Math.sin(a);
          const on = activeId === p.id;
          return (
            <g key={p.id} onClick={() => onPick?.(p.id)} style={{ cursor: "pointer" }}>
              <circle cx={x} cy={y} r={on ? 22 : 16} fill={on ? "rgba(47,107,255,.25)" : "rgba(255,255,255,.06)"} />
              <circle cx={x} cy={y} r={on ? 9 : 7} fill={on ? "#6a96ff" : "#fff"} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
