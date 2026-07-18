"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  name: string;
  size?: number;
}

export function Avatar({
  src,
  name,
  size = 64,
}: AvatarProps) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full glass"
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