import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LeadSchema } from "@/lib/schemas/lead";

// Basic Rate Limiting (In-memory fallback for V1)
// In production, replace with Upstash Redis / distributed rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: Request) {
  try {
    // Proxy-aware IP extraction
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown_ip";
    
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();

    // 1. Zod Validation (Server-side constraint enforcement)
    const result = LeadSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 2. Honeypot Check
    if (data.bot_field) {
      console.warn(`[Spam Blocked] Honeypot triggered from IP: ${ip}`);
      // Return 200 OK to fool the bot, but drop the request
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. Add Server-generated Metadata
    const leadData = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    // 4. Future-Ready Architecture: Send to n8n if configured
    if (process.env.N8N_WEBHOOK_URL) {
      // Background process - don't await/block the response
      fetch(process.env.N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      }).catch(err => console.error("n8n Webhook failed:", err));
    }

    // 5. Send Email via Resend
    if (!process.env.RESEND_API_KEY || !process.env.CARE_NURA_EMAIL) {
      console.error("Missing RESEND_API_KEY or CARE_NURA_EMAIL environment variables.");
      return NextResponse.json(
        { error: "Server Configuration Error: Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const primaryService = leadData.services[0] || "General Inquiry";
    
    await resend.emails.send({
      from: `CareNura Website <onboarding@resend.dev>`, // Must be a verified domain in production (e.g. leads@carenura.com)
      to: [process.env.CARE_NURA_EMAIL],
      reply_to: leadData.email,
      subject: `[New Project Lead] ${leadData.company || leadData.name} - ${primaryService}`,
      html: `
        <h2>New Project Lead: ${leadData.name}</h2>
        
        <h3>Client Information</h3>
        <ul>
          <li><strong>Name:</strong> ${leadData.name}</li>
          <li><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></li>
          <li><strong>Company:</strong> ${leadData.company || 'N/A'}</li>
          <li><strong>Country:</strong> ${leadData.country || 'N/A'}</li>
          <li><strong>Phone:</strong> ${leadData.phone || 'N/A'}</li>
          <li><strong>Preferred Contact:</strong> ${leadData.preferredContact}</li>
        </ul>

        <h3>Project Details</h3>
        <ul>
          <li><strong>Services:</strong> ${leadData.services.join(', ')}</li>
          <li><strong>Budget:</strong> ${leadData.budget}</li>
          <li><strong>Timeline:</strong> ${leadData.timeline}</li>
          <li><strong>Existing URL:</strong> ${leadData.referenceUrl || 'N/A'}</li>
        </ul>

        <h3>Description</h3>
        <p>${leadData.description}</p>

        <h3>Objective / Problem</h3>
        <p>${leadData.objective || 'N/A'}</p>

        <hr />
        <p><small>Submitted at: ${leadData.submittedAt} (UTC)</small></p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("API Error (/api/inquiry):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
