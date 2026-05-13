import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  business?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // ── Server-side validation ──────────────────────────────────
    const errors: string[] = [];

    if (!body.name?.trim()) errors.push("Name is required.");
    if (!body.email?.trim()) {
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push("Email is not valid.");
    }
    if (!body.message?.trim()) {
      errors.push("Message is required.");
    } else if (body.message.trim().length < 10) {
      errors.push("Message is too short.");
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    // ── Integration point ───────────────────────────────────────
    // Replace the placeholder below with your preferred backend:
    //
    // OPTION 1: Resend (recommended)
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "Apex Digital <noreply@apexdigital.com>",
    //     to: "hello@apexdigital.com",
    //     subject: `New inquiry from ${body.name}`,
    //     text: `Name: ${body.name}\nEmail: ${body.email}\nBusiness: ${body.business || "N/A"}\n\n${body.message}`,
    //   });
    //
    // OPTION 2: SendGrid
    //   import sgMail from "@sendgrid/mail";
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    //   await sgMail.send({ ... });
    //
    // OPTION 3: Forward to a webhook (Zapier, Make, n8n, etc.)
    //   await fetch(process.env.WEBHOOK_URL!, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
    //
    // OPTION 4: Save to a database
    //   await db.insert(contacts).values({ ...body, createdAt: new Date() });
    // ─────────────────────────────────────────────────────────────

    console.log("📬 Contact form submission:", {
      name: body.name,
      email: body.email,
      business: body.business || "N/A",
      message: body.message.slice(0, 100) + (body.message.length > 100 ? "..." : ""),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
