"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/data/contact";
import { BookCall } from "./BookCall";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text-primary)]"
        >
          LET&apos;S CONNECT
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <BookCall />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-[var(--radius-glass)] p-8"
        >
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-signal)]/15">
            <Mail size={20} className="text-[var(--color-signal)]" />
          </div>

          <h3 className="mb-5 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
            Send a Message
          </h3>

          <ContactForm />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]"
      >
        <span className="flex items-center gap-2">
          <Mail size={14} />
          {CONTACT_INFO.email}
        </span>

        <span className="flex items-center gap-2">
          <MapPin size={14} />
          {CONTACT_INFO.location}
        </span>

        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-text-primary)]"
          >
            {link.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}