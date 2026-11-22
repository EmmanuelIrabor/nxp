"use client";

import { useEffect } from "react";

export default function NativeBridge() {
  useEffect(() => {
    (async () => {
      const { Capacitor } = await import("@capacitor/core");
      if (!Capacitor.isNativePlatform()) return;
      const { StatusBar, Style } = await import("@capacitor/status-bar");
      await StatusBar.setStyle({ style: Style.Dark });
      if (Capacitor.getPlatform() === "android") {
        await StatusBar.setOverlaysWebView({ overlay: true });
      }
    })();
  }, []);
  return null;
}
