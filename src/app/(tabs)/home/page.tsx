"use client";

import Link from "next/link";
import Avatar from "@/components/Avatar";
import { BellIcon, SendIcon, RequestIcon, ScanIcon, MoreIcon } from "@/components/Icons";
import { balance, people, transactions, money, initials } from "@/lib/data";

const actions = [
  { label: "Send", href: "/send/", Icon: SendIcon },
  { label: "Request", href: "/send/", Icon: RequestIcon },
  { label: "Scan", href: "/nearby/", Icon: ScanIcon },
  { label: "More", href: "/dashboard/", Icon: MoreIcon },
];

export default function Home() {
  const [whole, cents] = balance.toFixed(2).split(".");

  return (
    <main className="screen">
      <header style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar name="Enigma Dev" size={44} />
        <div style={{ flex: 1 }}>
          <div className="eyebrow">Good morning</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18 }}>Enigma</div>
        </div>
        <button className="icon-btn" aria-label="Notifications"><BellIcon /></button>
      </header>

      <section className="enter" style={{ textAlign: "center", padding: "56px 0 36px" }}>
        <div className="chip chip--live">3 people nearby</div>
        <div style={{ marginTop: 28, fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>
          <span style={{ fontSize: 30, verticalAlign: "top", marginRight: 4, color: "var(--mist-300)" }}>₦</span>
          <span style={{ fontSize: 68 }}>{Number(whole).toLocaleString()}</span>
          <span style={{ fontSize: 28, color: "var(--mist-300)" }}>.{cents}</span>
        </div>
        <div className="eyebrow" style={{ marginTop: 12 }}>Main wallet · NGN</div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {actions.map(({ label, href, Icon }) => (
          <Link key={label} href={href} style={{ display: "grid", justifyItems: "center", gap: 10 }}>
            <span className="icon-btn" style={{ width: 62, height: 62, background: "var(--surface-hi)" }}><Icon size={24} /></span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
          </Link>
        ))}
      </section>

      <section style={{ marginTop: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>Nearby now</h2>
          <Link href="/nearby/" className="eyebrow">See all</Link>
        </div>
        <div className="scroll-x">
          {people.map((p) => (
            <Link key={p.id} href="/send/" style={{ display: "grid", justifyItems: "center", gap: 8, minWidth: 68 }}>
              <Avatar name={p.name} size={60} hueA={p.hueA} hueB={p.hueB} />
              <span style={{ fontSize: 13 }}>{p.name.split(" ")[0]}</span>
              <span className="eyebrow">{p.distance}m</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginTop: 32, padding: "8px 20px" }}>
        {transactions.map((t) => (
          <div className="row" key={t.id}>
            {t.person ? <Avatar name={t.person} size={44} /> : <span className="avatar" style={{ ["--size" as string]: "44px" }}>{initials("Top Up")}</span>}
            <div className="row__body">
              <div className="row__title">{t.title}</div>
              <div className="row__sub">{t.note} · {t.time}</div>
            </div>
            <div className="row__amount" style={{ color: t.amount > 0 ? "var(--blue-300)" : "var(--white)" }}>
              {t.amount > 0 ? "+" : "−"}{money(t.amount)}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
