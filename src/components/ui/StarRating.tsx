import { Star } from "lucide-react";

export function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? "fill-[var(--color-signal)] text-[var(--color-signal)]"
              : "text-[var(--color-glass-border)]"
          }
        />
      ))}
    </div>
  );
}