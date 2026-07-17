"use client";

import { useState } from "react";
import Cal from "@calcom/embed-react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data/contact";

export function BookCall() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="glass rounded-[var(--radius-glass)] overflow-hidden h-[720px]">
        <Cal
          calLink={CONTACT_INFO.calUsername}
          style={{ width: "100%", height: "100%" }}
          config={{ theme: "dark" }}
        />
      </div>
    );
  }

  return (
    <motion.button
      onClick={() => setOpen(true)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="glass rounded-[var(--radius-glass)] p-8 text-left w-full h-full flex flex-col justify-between hover:bg-white/[0.08] transition-colors"
    >
      <div>
        <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/15 flex items-center justify-center mb-5">
          <CalendarDays size={20} className="text-[var(--color-accent-soft)]" />
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          Book a Call
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
          Prefer to talk it through? Grab a slot on my calendar directly.
        </p>
      </div>
      <span className="text-sm text-[var(--color-accent-soft)] mt-6">Open scheduler →</span>
    </motion.button>
  );
}