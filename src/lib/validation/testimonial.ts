import { z } from "zod";

export const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  company: z.string().optional(),
  rating: z.number().min(1).max(5),
  quote: z.string().min(20, "Please write at least a couple of sentences"),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;