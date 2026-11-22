import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.syntrix.mobile",
  appName: "Syntrix",
  webDir: "out",
  backgroundColor: "#02050D",
  ios: { contentInset: "never" },
  plugins: {
    SplashScreen: { launchAutoHide: true, launchShowDuration: 0, backgroundColor: "#02050D" },
    Keyboard: { resize: "none" },
  },
};

export default config;
