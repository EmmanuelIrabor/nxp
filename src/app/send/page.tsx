"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@/components/Avatar";
import { BackIcon } from "@/components/Icons";
import { people } from "@/lib/data";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"];

export default function Send() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [to, setTo] = useState(people[0]);
  const [done, setDone] = useState(false);

  const press = (k: string) => {
    if (k === "⌫") return setValue((v) => v.slice(0, -1));
    if (k === "." && (value.includes(".") || !value)) return;
    if (value.includes(".") && value.split(".")[1].length >= 2) return;
    if (value.length < 9) setValue((v) => v + k);
  };

  if (done) {
    return (
      <main className="screen screen--plain" style={{ display: "grid", placeItems: "center", minHeight: "100dvh", textAlign: "center" }}>
        <div className="enter">
          <Avatar name={to.name} size={88} hueA={to.hueA} hueB={to.hueB} />
          <h1 style={{ margin: "28px 0 8px", fontFamily: "var(--font-display)", fontSize: 34, letterSpacing: "-0.035em", fontWeight: 600 }}>Sent</h1>
          <p style={{ margin: 0, color: "var(--mist-300)" }}>₦{value} to {to.name}</p>
          <button className="btn btn--primary" style={{ marginTop: 40 }} onClick={() => router.replace("/home/")}>Done</button>
        </div>
      </main>
    );
  }

  return (
    <main className="screen screen--plain" style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button className="icon-btn" aria-label="Back" onClick={() => router.back()}><BackIcon /></button>
        <span className="eyebrow">Pay nearby</span>
        <span style={{ width: 44 }} />
      </header>

      <div className="scroll-x" style={{ marginTop: 28 }}>
        {people.map((p) => (
          <button key={p.id} onClick={() => setTo(p)} className="chip" style={{ height: 44, paddingLeft: 6, border: to.id === p.id ? "1px solid var(--blue-500)" : undefined, background: to.id === p.id ? "rgba(47,107,255,.16)" : undefined, cursor: "pointer", flex: "none" }}>
            <Avatar name={p.name} size={32} hueA={p.hueA} hueB={p.hueB} />
            {p.name.split(" ")[0]}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, display: "grid", placeItems: "center", textAlign: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 600, letterSpacing: "-0.045em", color: value ? "var(--white)" : "var(--mist-500)" }}>
            ₦{value || "0"}
          </div>
          <div className="eyebrow" style={{ marginTop: 10 }}>To {to.name} · {to.distance}m away</div>
        </div>
      </div>

      <div className="keypad">
        {keys.map((k) => (
          <button key={k} className="keypad__key" onClick={() => press(k)}>{k}</button>
        ))}
      </div>
      <button className="btn btn--blue btn--block" style={{ marginTop: 16 }} disabled={!value || Number(value) === 0} onClick={() => setDone(true)}>
        Send to {to.name.split(" ")[0]}
      </button>
    </main>
  );
}
