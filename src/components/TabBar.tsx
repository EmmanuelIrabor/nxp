"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, NearbyIcon, InsightsIcon, SendIcon } from "./Icons";

const tabs = [
  { href: "/home/", label: "Home", Icon: HomeIcon },
  { href: "/nearby/", label: "Nearby", Icon: NearbyIcon },
  { href: "/send/", label: "Pay", Icon: SendIcon },
  { href: "/dashboard/", label: "Insights", Icon: InsightsIcon },
];

export default function TabBar() {
  const path = usePathname();
  return (
    <nav className="tabbar" aria-label="Primary">
      {tabs.map(({ href, label, Icon }) => (
        <Link key={href} href={href} className={`tabbar__item ${path.startsWith(href.slice(0, -1)) ? "tabbar__item--active" : ""}`}>
          <Icon />
          {label}
        </Link>
      ))}
    </nav>
  );
}
