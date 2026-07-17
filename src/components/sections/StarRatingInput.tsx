"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export function StarRatingInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(null)}
          aria-label={`Rate ${n} star${n === 1 ? "" : "s"}`}
        >
          <Star
            size={24}
            className={
              (hover ?? value) >= n
                ? "fill-[var(--color-signal)] text-[var(--color-signal)]"
                : "text-[var(--color-glass-border)]"
            }
          />
        </button>
      ))}
    </div>
  );
}