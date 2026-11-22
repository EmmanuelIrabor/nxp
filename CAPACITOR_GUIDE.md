# Syntrix: Next.js to Capacitor guide

Project root: `syntrix/`. All commands run from there.

## 1. Prerequisites

| Target | Needs |
| --- | --- |
| Both | Node 20+, npm 10+ |
| Android | Android Studio (SDK 34+, a virtual device or USB debugging phone), JDK 17 |
| iOS | macOS, Xcode 15+, CocoaPods (`brew install cocoapods`) |

Windows can build Android only. iOS requires a Mac.

## 2. Install and preview in the browser

```bash
npm install
npm run dev
```

Open http://localhost:3000 and use device emulation at 390 x 844.

## 3. Why the project is Capacitor-ready

| File | Setting | Reason |
| --- | --- | --- |
| `next.config.mjs` | `output: "export"` | Emits plain HTML/JS/CSS to `out/`, which Capacitor bundles |
| `next.config.mjs` | `trailingSlash: true` | Keeps routes working from the app's file server |
| `next.config.mjs` | `images.unoptimized: true` | No image server exists inside the app |
| `src/app/layout.tsx` | `viewportFit: "cover"` | Lets the UI draw under notches; `--safe-top` / `--safe-bottom` handle insets |
| `capacitor.config.ts` | `webDir: "out"` | Points Capacitor at the export folder |

Rules while building: no API routes, no `getServerSideProps`, no server actions, no `next/headers` or middleware. Fetch from an external API in client components instead.

## 4. Build the static export

```bash
npm run build
```

Confirm `out/index.html` exists.

## 5. Add the native platforms

Run once:

```bash
npx cap add android
npx cap add ios
```

This creates `android/` and `ios/` in the project root. Commit them.

## 6. Sync and run

After every web change:

```bash
npm run cap:sync
```

Android:

```bash
npm run cap:android
```

Android Studio opens. Pick a device and press Run.

iOS (Mac):

```bash
npm run cap:ios
```

Xcode opens. Select a simulator or device, set a Team under Signing & Capabilities, press Run.

Direct run without opening the IDE:

```bash
npx cap run android
npx cap run ios
```

## 7. App icon and native splash

1. Create `assets/icon-only.png` (1024 x 1024), `assets/icon-foreground.png`, `assets/icon-background.png`, `assets/splash.png` and `assets/splash-dark.png` (2732 x 2732, logo centred in the middle 1200 px).
2. Use background `#02050D` for splash and icon background.
3. Generate everything:

```bash
npx capacitor-assets generate --iconBackgroundColor '#02050D' --splashBackgroundColor '#02050D'
```

The in-app splash at `/` then continues the native one with the animated mark.

## 8. Status bar and safe areas

`src/components/NativeBridge.tsx` sets a light status bar over the dark UI. On Android it enables overlay so the gradient reaches the top edge.

Use the tokens in all new screens:

```scss
padding-top: var(--safe-top);
padding-bottom: var(--safe-bottom);
```

## 9. Live reload on a device

1. Find your LAN IP (`ipconfig` on Windows, `ipconfig getifaddr en0` on Mac).
2. Start `npm run dev -- -H 0.0.0.0`.
3. Run with the dev server as the source:

```bash
npx cap run android --live-reload --host=YOUR_LAN_IP --port=3000
```

Phone and computer must be on the same network. Static export is not used in this mode, so a dev-only edit is instant.

## 10. Adding native features later

| Need | Plugin |
| --- | --- |
| Proximity discovery (GPS) | `@capacitor/geolocation` |
| Bluetooth nearby detection | `@capacitor-community/bluetooth-le` |
| Face ID / fingerprint | `@capgo/capacitor-native-biometric` |
| Haptics | `@capacitor/haptics` |
| Push notifications | `@capacitor/push-notifications` |

Install, run `npx cap sync`, then add permission strings:

- Android: `android/app/src/main/AndroidManifest.xml`
- iOS: `ios/App/App/Info.plist` (for example `NSLocationWhenInUseUsageDescription`, `NSFaceIDUsageDescription`)

## 11. Release builds

Android:

1. `npm run cap:android`
2. In Android Studio: Build, Generate Signed Bundle / APK, choose Android App Bundle.
3. Create a keystore and store it safely. Upload the `.aab` to Google Play Console.

iOS:

1. `npm run cap:ios`
2. In Xcode: set the Bundle Identifier (`app.syntrix.mobile` in `capacitor.config.ts`), Product, Archive, Distribute App, TestFlight.

Change `appId` in `capacitor.config.ts` before your first store upload; it cannot change afterwards.

## 12. Troubleshooting

| Symptom | Fix |
| --- | --- |
| Blank white screen on device | Run `npm run cap:sync`; check `out/index.html` exists |
| Routes 404 on reload | Keep `trailingSlash: true` and link with trailing slashes |
| `next build` fails on export | Remove any server-only feature (API routes, cookies(), headers()) |
| Fonts missing offline | `next/font` self-hosts at build; rebuild and sync |
| Content under notch | Use `--safe-top` / `--safe-bottom`; verify `viewportFit: "cover"` |
| Android cleartext error with live reload | Add `server: { cleartext: true }` to `capacitor.config.ts` temporarily |
| Pods failing on iOS | `cd ios/App && pod install --repo-update` |
