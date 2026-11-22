"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo, FaceIcon } from "@/components/Icons";

export default function SignIn() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const ready = phone.length >= 10 && pin.length >= 4;

  return (
    <main className="screen screen--plain" style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <header className="enter" style={{ paddingTop: 48 }}>
        <Logo size={56} />
        <h1 style={{ margin: "32px 0 10px", fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1.05, letterSpacing: "-0.035em", fontWeight: 600 }}>
          Welcome back.
        </h1>
        <p style={{ margin: 0, color: "var(--mist-300)", fontSize: 17, lineHeight: 1.45 }}>
          Sign in to pay and get paid by the people around you.
        </p>
      </header>

      <form
        className="enter"
        style={{ marginTop: 44, display: "grid", gap: 18, animationDelay: "0.1s" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (ready) router.push("/home/");
        }}
      >
        <label className="field">
          <span className="field__label">Phone number</span>
          <input className="field__input" inputMode="tel" placeholder="0801 234 5678" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^\d+ ]/g, ""))} />
        </label>
        <label className="field">
          <span className="field__label">Passcode</span>
          <input className="field__input" type="password" inputMode="numeric" maxLength={6} placeholder="••••" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} />
        </label>
        <button className="btn btn--blue btn--block" type="submit" disabled={!ready} style={{ marginTop: 8 }}>
          Continue
        </button>
        <button className="btn btn--ghost btn--block" type="button" onClick={() => router.push("/home/")}>
          <FaceIcon /> Use Face ID
        </button>
      </form>

      <p className="eyebrow" style={{ marginTop: "auto", paddingTop: 32, textAlign: "center" }}>
        Prototype build · no data is stored
      </p>
    </main>
  );
}
