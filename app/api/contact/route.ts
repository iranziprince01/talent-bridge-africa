import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "iranziprince1@gmail.com";

export type ContactBody =
  | {
      type: "business";
      businessName: string;
      businessEmail: string;
      businessNeeds: string;
    }
  | {
      type: "student";
      studentName: string;
      studentEmail: string;
      studentDetails: string;
    };

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("Missing GMAIL_USER or GMAIL_APP_PASSWORD in environment");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

const BRAND = {
  teal: "#00939f",
  tealLight: "#e6f6f7",
  slate900: "#0f172a",
  slate700: "#334155",
  slate500: "#64748b",
  slate200: "#e2e8f0",
  slate50: "#f8fafc",
  white: "#ffffff",
};

function emailWrapper(content: string, title: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: ${BRAND.slate50}; color: ${BRAND.slate900}; line-height: 1.5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.slate50};">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.06); background-color: ${BRAND.white}; border: 1px solid ${BRAND.slate200};">
          <tr>
            <td style="background: linear-gradient(135deg, ${BRAND.teal} 0%, #007a85 100%); padding: 24px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 18px; font-weight: 700; color: ${BRAND.white}; letter-spacing: -0.02em;">Talent Bridge Africa</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 4px;">
                    <span style="font-size: 13px; color: rgba(255,255,255,0.9);">${escapeHtml(title)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 28px; border-top: 1px solid ${BRAND.slate200}; background-color: ${BRAND.slate50};">
              <p style="margin: 0; font-size: 12px; color: ${BRAND.slate500};">
                This was sent from the Talent Bridge Africa contact form. Reply to this email to respond directly.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function fieldRow(label: string, value: string): string {
  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 14px; background-color: ${BRAND.slate50}; border-radius: 8px; border-left: 3px solid ${BRAND.teal};">
          <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: ${BRAND.slate500};">${escapeHtml(label)}</p>
          <p style="margin: 0; font-size: 14px; color: ${BRAND.slate900}; font-weight: 500;">${escapeHtml(value)}</p>
        </td>
      </tr>
    </table>`;
}

function messageBlock(label: string, value: string): string {
  return `
    <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: ${BRAND.slate500};">${escapeHtml(label)}</p>
    <div style="padding: 14px; background-color: ${BRAND.slate50}; border-radius: 8px; border: 1px solid ${BRAND.slate200};">
      <p style="margin: 0; font-size: 14px; color: ${BRAND.slate700}; white-space: pre-wrap; word-break: break-word;">${escapeHtml(value)}</p>
    </div>`;
}

function buildEmailHtml(body: ContactBody): { subject: string; html: string } {
  if (body.type === "business") {
    const content =
      fieldRow("Business name", body.businessName) +
      fieldRow("Work email", body.businessEmail) +
      messageBlock("What they need help with", body.businessNeeds);
    return {
      subject: `[TBA] Business enquiry from ${body.businessName}`,
      html: emailWrapper(content, "New business enquiry"),
    };
  }
  const content =
    fieldRow("Full name", body.studentName) +
    fieldRow("Email", body.studentEmail) +
    messageBlock("Course, university & skills", body.studentDetails);
  return {
    subject: `[TBA] Student application from ${body.studentName}`,
    html: emailWrapper(content, "New student / graduate application"),
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    if (!body || typeof body.type !== "string") {
      return NextResponse.json(
        { error: "Invalid body: missing type" },
        { status: 400 }
      );
    }
    if (body.type === "business") {
      if (
        !body.businessName?.trim() ||
        !body.businessEmail?.trim() ||
        !body.businessNeeds?.trim()
      ) {
        return NextResponse.json(
          { error: "Missing business name, email, or needs" },
          { status: 400 }
        );
      }
    } else if (body.type === "student") {
      if (
        !body.studentName?.trim() ||
        !body.studentEmail?.trim() ||
        !body.studentDetails?.trim()
      ) {
        return NextResponse.json(
          { error: "Missing name, email, or details" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Invalid type: use 'business' or 'student'" },
        { status: 400 }
      );
    }

    const { subject, html } = buildEmailHtml(body);
    const transporter = getTransporter();
    const from = process.env.GMAIL_USER || RECIPIENT_EMAIL;

    await transporter.sendMail({
      from: `Talent Bridge Africa <${from}>`,
      to: RECIPIENT_EMAIL,
      replyTo: body.type === "business" ? body.businessEmail : body.studentEmail,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message = err instanceof Error ? err.message : "Failed to send";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
