"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { TestimonialFormData } from "@/lib/validation/testimonial";
import { StarRatingInput } from "@/components/sections/StarRatingInput";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubmitTestimonialPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TestimonialFormData>({
    defaultValues: {
      rating: 5,
      website: "",
    },
  });

  async function onSubmit(data: TestimonialFormData) {
    setStatus("sending");

    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setStatus("sent");
      reset();
      toast.success("Thanks — your testimonial was submitted for review.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
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
          If we've worked together, I'd really appreciate a few honest words.
          Submissions are reviewed before appearing on the site — they won't be
          published automatically.
        </p>

        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[var(--radius-glass)] p-8 text-center"
          >
            <CheckCircle2
              size={28}
              className="mx-auto text-[var(--color-signal)] mb-4"
            />
            <p className="text-sm text-[var(--color-text-primary)] font-medium">
              Thank you!
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-2">
              I've received your testimonial and will review it shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div
              className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="testimonial-website">Website</label>
              <input
                id="testimonial-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div>
              <span className="block text-xs text-[var(--color-text-faint)] mb-2">
                Your rating
              </span>
              <Controller
                name="rating"
                control={control}
                rules={{
                  min: { value: 1, message: "Choose a rating" },
                  max: { value: 5, message: "Choose a rating" },
                }}
                render={({ field }) => (
                  <StarRatingInput
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.rating && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="testimonial-name"
                  className="block text-xs text-[var(--color-text-faint)] mb-1.5"
                >
                  Name
                </label>
                <input
                  id="testimonial-name"
                  type="text"
                  autoComplete="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Name must be 100 characters or fewer",
                    },
                  })}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="testimonial-email"
                  className="block text-xs text-[var(--color-text-faint)] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="testimonial-email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    maxLength: {
                      value: 254,
                      message: "Email is too long",
                    },
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="testimonial-role"
                  className="block text-xs text-[var(--color-text-faint)] mb-1.5"
                >
                  Your role
                </label>
                <input
                  id="testimonial-role"
                  type="text"
                  {...register("role", {
                    required: "Role is required",
                    minLength: {
                      value: 2,
                      message: "Role must be at least 2 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Role must be 100 characters or fewer",
                    },
                  })}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
                  placeholder="e.g. Engineering Manager"
                />
                {errors.role && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="testimonial-company"
                  className="block text-xs text-[var(--color-text-faint)] mb-1.5"
                >
                  Company (optional)
                </label>
                <input
                  id="testimonial-company"
                  type="text"
                  {...register("company", {
                    maxLength: {
                      value: 120,
                      message: "Company must be 120 characters or fewer",
                    },
                  })}
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow"
                  placeholder="Where we worked together"
                />
                {errors.company && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="testimonial-quote"
                className="block text-xs text-[var(--color-text-faint)] mb-1.5"
              >
                Your testimonial
              </label>
              <textarea
                id="testimonial-quote"
                rows={5}
                {...register("quote", {
                  required: "Testimonial is required",
                  minLength: {
                    value: 20,
                    message: "Please write at least a couple of sentences",
                  },
                  maxLength: {
                    value: 3000,
                    message: "Testimonial must be 3000 characters or fewer",
                  },
                })}
                className="w-full glass rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-shadow resize-none"
                placeholder="What was it like working with Tebatso?"
              />
              {errors.quote && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.quote.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-soft)] disabled:opacity-70 transition-colors"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Submit <Send size={15} />
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
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
