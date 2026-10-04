import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContact } from "@/lib/validation/contact";
import { checkRateLimit, getRequestIp } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const contentLength = Number(req.headers.get("content-length") ?? "0");

    if (contentLength > 20_000) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }

    const ip = getRequestIp(req);
    const rateLimit = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many messages. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = validateContact(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.issues },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (!apiKey || !to) {
      console.error("Contact form email environment variables are missing.");
      return NextResponse.json(
        { error: "Contact service is temporarily unavailable." },
        { status: 503 }
      );
    }

    const { name, email, subject, message } = parsed.data;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "Portfolio Contact <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend contact email failed:", error);
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
