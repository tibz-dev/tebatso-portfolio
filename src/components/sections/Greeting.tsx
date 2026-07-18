"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar } from "../ui/Avatar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function getGreeting(hour: number) {
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good afternoon";
  return "Good evening";
}

export function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  return (
    <motion.div
      custom={0}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="mb-8 flex items-center gap-4"
    >
      <Avatar
        src="/images/profile.jpg"
        name="Tebatso Seshayi"
        size={64}
      />

      <div className="min-w-0">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
          {greeting}
        </p>

        <p className="whitespace-nowrap text-sm text-[var(--color-text-muted)]">
          Software Engineer · South Africa
        </p>
      </div>
    </motion.div>
  );
}