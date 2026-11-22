"use client";

import { useState } from "react";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Radar from "@/components/Radar";
import { people } from "@/lib/data";

export default function Nearby() {
  const [active, setActive] = useState(people[0].id);

  return (
    <main className="screen">
      <header className="enter" style={{ paddingTop: 16 }}>
        <div className="eyebrow">Within 30 metres</div>
        <h1 style={{ margin: "8px 0 0", fontFamily: "var(--font-display)", fontSize: 34, letterSpacing: "-0.035em", fontWeight: 600 }}>Nearby</h1>
      </header>

      <div style={{ margin: "20px -8px 12px" }}>
        <Radar activeId={active} onPick={setActive} />
      </div>

      <section className="card" style={{ padding: "8px 20px" }}>
        {people.map((p) => (
          <div className="row" key={p.id} onClick={() => setActive(p.id)} style={{ opacity: active === p.id ? 1 : 0.6, transition: "opacity .25s" }}>
            <Avatar name={p.name} size={48} hueA={p.hueA} hueB={p.hueB} />
            <div className="row__body">
              <div className="row__title">{p.name}</div>
              <div className="row__sub">{p.handle} · {p.distance}m away</div>
            </div>
            <Link href="/send/" className="btn btn--primary" style={{ height: 40, padding: "0 18px", fontSize: 14 }}>Pay</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
