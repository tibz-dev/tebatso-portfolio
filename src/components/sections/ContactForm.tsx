"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormData } from "@/lib/validation/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      reset();
      toast.success("Message sent — I'll get back to you soon.");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">Name</label>
          <input
            {...register("name")}
            className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">Email</label>
          <input
            {...register("email")}
            className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">Subject</label>
        <input
          {...register("subject")}
          className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
          placeholder="What's this about?"
        />
        {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow resize-none"
          placeholder="Tell me a bit about what you're looking for…"
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-xs text-[var(--color-text-muted)] cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 accent-[var(--color-accent)]"
          />
          I agree to be contacted regarding this message.
        </label>
        {errors.consent && <p className="text-xs text-red-400 mt-1">{errors.consent.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className="relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-soft)] disabled:opacity-70 transition-colors overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              Send Message <Send size={15} />
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span
              key="sending"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              Sending <Loader2 size={15} className="animate-spin" />
            </motion.span>
          )}
          {status === "sent" && (
            <motion.span
              key="sent"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              Sent <CheckCircle2 size={15} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}