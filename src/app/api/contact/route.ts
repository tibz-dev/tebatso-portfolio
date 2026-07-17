import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: process.env.CONTACT_EMAIL ?? "",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}