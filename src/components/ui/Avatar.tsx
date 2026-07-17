"use client";

import { useState } from "react";
import Image from "next/image";

export function Avatar({ src, name, size = 64 }: { src: string; name: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative rounded-full overflow-hidden glass shrink-0 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {!failed ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-accent-soft)]"
          style={{ fontSize: size * 0.32 }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}