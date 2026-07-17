"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ArchitectureGraph } from "./ArchitectureGraph";
import { Greeting } from "./Greeting";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Architecture graph */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="w-full max-w-3xl translate-x-1/4">
          <ArchitectureGraph />
        </div>
      </div>

      {/* Ambient Glow */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #5b63d3, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-4 mb-6"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden glass shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Tebatso Seshayi"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <Greeting />
            <p className="text-sm text-[var(--color-text-muted)]">Software Engineer · South Africa</p>
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-6xl md:text-7xl"
        >
          Tebatso Seshayi
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]"
        >
          I build enterprise-grade systems and AI-powered software—from
          clean architecture backends to modern, performant user interfaces.
          Currently completing a BSc in Information Technology at
          North-West University.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-soft)]"
          >
            View My Work
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-white/10"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-text-muted)]"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}