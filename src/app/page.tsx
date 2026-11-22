"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Icons";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.replace("/signin/"), 2200);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <main className="screen screen--plain splash">
      <div style={{ textAlign: "center" }}>
        <div className="splash__mark enter" style={{ margin: "0 auto" }}>
          <Logo />
        </div>
        <h1 className="splash__word">syntrix</h1>
        <p className="eyebrow splash__tag">Pay who is near you</p>
      </div>
    </main>
  );
}
