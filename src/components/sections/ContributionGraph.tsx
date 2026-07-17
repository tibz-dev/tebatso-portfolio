"use client";

import type { ContributionDay } from "@/lib/github";

function levelForCount(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

const LEVEL_COLORS = [
  "rgba(255,255,255,0.05)",
  "rgba(66,200,183,0.25)",
  "rgba(66,200,183,0.5)",
  "rgba(66,200,183,0.75)",
  "rgba(66,200,183,1)",
];

export function ContributionGraph({ days }: { days: ContributionDay[] }) {
  // Group into weeks (columns) of 7 days each
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-1 min-w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                className="w-2.5 h-2.5 rounded-[2px]"
                style={{ backgroundColor: LEVEL_COLORS[levelForCount(day.count)] }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}