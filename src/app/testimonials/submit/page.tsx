"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, CheckCircle2, Loader2 } from "lucide-react";
import { testimonialSchema, type TestimonialFormData } from "@/lib/validation/testimonial";
import { StarRatingInput } from "@/components/sections/StarRatingInput";

export default function SubmitTestimonialPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: { rating: 5 },
  });

  async function onSubmit(data: TestimonialFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("idle");
    }
  }

  return (
    <main className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-xl mx-auto">
        <Link
          href="/#testimonials"
          className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-3">
          Leave a testimonial
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-10 leading-relaxed">
          If we've worked together, I'd really appreciate a few honest words. Submissions are
          reviewed before appearing on the site — they won't be published automatically.
        </p>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[var(--radius-glass)] p-8 text-center"
          >
            <CheckCircle2 size={28} className="mx-auto text-[var(--color-signal)] mb-4" />
            <p className="text-sm text-[var(--color-text-primary)] font-medium">Thank you!</p>
            <p className="text-sm text-[var(--color-text-muted)] mt-2">
              I've received your testimonial and will review it shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-xs text-[var(--color-text-faint)] mb-2">Your rating</label>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => <StarRatingInput value={field.value} onChange={field.onChange} />}
              />
            </div>

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

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">Your role</label>
                <input
                  {...register("role")}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
                  placeholder="e.g. Engineering Manager"
                />
                {errors.role && <p className="text-xs text-red-400 mt-1">{errors.role.message}</p>}
              </div>
              <div>
                <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">
                  Company (optional)
                </label>
                <input
                  {...register("company")}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
                  placeholder="Where we worked together"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[var(--color-text-faint)] mb-1.5">Your testimonial</label>
              <textarea
                {...register("quote")}
                rows={5}
                className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow resize-none"
                placeholder="What was it like working with Tebatso?"
              />
              {errors.quote && <p className="text-xs text-red-400 mt-1">{errors.quote.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-soft)] disabled:opacity-70 transition-colors"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    Submit <Send size={15} />
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    Sending <Loader2 size={15} className="animate-spin" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        )}
      </div>
    </main>
  );
}