export type Person = {
  id: string;
  name: string;
  handle: string;
  distance: number;
  angle: number;
  hueA: string;
  hueB: string;
};

export type Tx = {
  id: string;
  title: string;
  note: string;
  amount: number;
  time: string;
  person?: string;
};

export const balance = 2480.14;

export const people: Person[] = [
  { id: "p1", name: "Tunde Bakare", handle: "@tunde", distance: 4, angle: 28, hueA: "#2f6bff", hueB: "#0d1b45" },
  { id: "p2", name: "Amaka Obi", handle: "@amaka", distance: 11, angle: 140, hueA: "#6a96ff", hueB: "#14275f" },
  { id: "p3", name: "Chidi Eze", handle: "@chidi", distance: 17, angle: 232, hueA: "#1747e0", hueB: "#09122b" },
  { id: "p4", name: "Zainab Musa", handle: "@zainab", distance: 26, angle: 318, hueA: "#a5c0ff", hueB: "#14275f" },
];

export const transactions: Tx[] = [
  { id: "t1", title: "Tunde Bakare", note: "Nearby · Lunch split", amount: -45, time: "11:17 AM", person: "Tunde Bakare" },
  { id: "t2", title: "Amaka Obi", note: "Nearby · Received", amount: 120, time: "10:42 AM", person: "Amaka Obi" },
  { id: "t3", title: "Wallet top-up", note: "Bank transfer", amount: 500, time: "9:05 AM" },
  { id: "t4", title: "Chidi Eze", note: "Nearby · Ride share", amount: -18.5, time: "Yesterday", person: "Chidi Eze" },
  { id: "t5", title: "Zainab Musa", note: "Nearby · Market", amount: -32, time: "Yesterday", person: "Zainab Musa" },
];

export const weekly = [
  { d: "M", v: 42 },
  { d: "T", v: 68 },
  { d: "W", v: 35 },
  { d: "T", v: 90 },
  { d: "F", v: 58 },
  { d: "S", v: 110 },
  { d: "S", v: 76 },
];

export const categories = [
  { name: "Shared meals", share: 38 },
  { name: "Transport", share: 27 },
  { name: "Markets", share: 21 },
  { name: "Other", share: 14 },
];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export const money = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 2 })
    .format(Math.abs(n))
    .replace("NGN", "₦")
    .trim();
