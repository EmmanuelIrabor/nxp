import type { CSSProperties } from "react";
import { initials } from "@/lib/data";

type Props = { name: string; size?: number; hueA?: string; hueB?: string };

export default function Avatar({ name, size = 48, hueA, hueB }: Props) {
  const style = { "--size": `${size}px`, "--hue-a": hueA, "--hue-b": hueB } as CSSProperties;
  return (
    <span className="avatar" style={style}>
      {initials(name)}
    </span>
  );
}
