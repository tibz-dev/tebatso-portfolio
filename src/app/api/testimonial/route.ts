import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateTestimonial } from "@/lib/validation/testimonial";
import { checkRateLimit, getRequestIp } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const contentLength = Number(req.headers.get("content-length") ?? "0");

    if (contentLength > 20_000) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const ip = getRequestIp(req);
    const rateLimit = checkRateLimit(
      `testimonial:${ip}`,
      3,
      30 * 60 * 1000
    );

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = validateTestimonial(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.issues },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (!apiKey || !to) {
      console.error("Testimonial email environment variables are missing.");
      return NextResponse.json(
        { error: "Submission service is temporarily unavailable." },
        { status: 503 }
      );
    }

    const { name, email, role, company, rating, quote } = parsed.data;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "Portfolio Testimonials <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Testimonial] ${name} — ${rating}★`,
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nCompany: ${company ?? "—"}\nRating: ${rating}/5\n\n${quote}\n\n---\nReview this, then add it to src/lib/data/testimonial.ts to publish it.`,
    });

    if (error) {
      console.error("Resend testimonial email failed:", error);
      return NextResponse.json(
        { error: "Unable to submit your testimonial right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Testimonial submission error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
