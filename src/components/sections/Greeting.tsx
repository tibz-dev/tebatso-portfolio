"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ArchitectureGraph } from "./ArchitectureGraph";
import { Avatar } from "../ui/Avatar";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function getGreeting(hour: number): string {
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 18) return "Good afternoon";
  return "Good evening";
}

export function Greeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    // Runs client-side only, so this reflects the visitor's own local time/timezone —
    // no detection needed, the browser clock already is their timezone.
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  return (
    <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-4 mb-8"
        >
          <Avatar src="/images/profile.jpg" name="Tebatso Seshayi" size={64} />
          <div className="min-w-0">
            <Greeting />
            <p className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">
              Software Engineer · South Africa
            </p>
          </div>
        </motion.div>
  );
}