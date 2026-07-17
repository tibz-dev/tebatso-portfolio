import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { testimonialSchema } from "@/lib/validation/testimonial";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = testimonialSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, role, company, rating, quote } = parsed.data;

    await resend.emails.send({
      from: "Portfolio Testimonials <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "",
      replyTo: email,
      subject: `[Testimonial] ${name} — ${rating}★`,
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nCompany: ${company ?? "—"}\nRating: ${rating}/5\n\n${quote}\n\n---\nReview this, then add it to src/lib/data/testimonials.ts to publish it.`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Testimonial submission error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}