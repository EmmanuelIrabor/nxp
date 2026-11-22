import { weekly, categories, money } from "@/lib/data";

export default function Dashboard() {
  const max = Math.max(...weekly.map((w) => w.v));
  const total = weekly.reduce((s, w) => s + w.v, 0);
  const peak = weekly.findIndex((w) => w.v === max);

  return (
    <main className="screen">
      <header className="enter" style={{ paddingTop: 16 }}>
        <div className="eyebrow">This week</div>
        <h1 style={{ margin: "8px 0 0", fontFamily: "var(--font-display)", fontSize: 34, letterSpacing: "-0.035em", fontWeight: 600 }}>Insights</h1>
      </header>

      <section className="card enter" style={{ marginTop: 24, animationDelay: ".08s" }}>
        <div className="eyebrow">Spent nearby</div>
        <div style={{ margin: "8px 0 28px", fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 600, letterSpacing: "-0.04em" }}>{money(total * 1000)}</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 150 }}>
          {weekly.map((w, i) => (
            <div className="bar" key={i} style={{ height: "100%", justifyContent: "flex-end" }}>
              <div className={`bar__fill ${i === peak ? "bar__fill--on" : ""}`} style={{ height: `${(w.v / max) * 100}%`, animationDelay: `${i * 60}ms` }} />
              <span className="eyebrow">{w.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div className="card">
          <div className="eyebrow">People paid</div>
          <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600 }}>12</div>
        </div>
        <div className="card">
          <div className="eyebrow">Avg. distance</div>
          <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600 }}>9m</div>
        </div>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>By category</div>
        {categories.map((c) => (
          <div key={c.name} style={{ padding: "12px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, marginBottom: 8 }}>
              <span>{c.name}</span>
              <span style={{ color: "var(--mist-300)" }}>{c.share}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 6, background: "var(--surface-hi)" }}>
              <div style={{ width: `${c.share}%`, height: "100%", borderRadius: 6, background: "linear-gradient(90deg, var(--blue-600), var(--blue-400))" }} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
