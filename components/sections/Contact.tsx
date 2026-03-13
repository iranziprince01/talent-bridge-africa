"use client";

import { useState } from "react";

export function ContactSection() {
  const [businessStatus, setBusinessStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [studentStatus, setStudentStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleBusinessSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const businessName = (data.get("business-name") as string)?.trim() ?? "";
    const businessEmail = (data.get("business-email") as string)?.trim() ?? "";
    const businessNeeds = (data.get("business-needs") as string)?.trim() ?? "";
    if (!businessName || !businessEmail || !businessNeeds) return;
    setBusinessStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "business",
          businessName,
          businessEmail,
          businessNeeds,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setBusinessStatus("success");
      form.reset();
    } catch {
      setBusinessStatus("error");
    }
  }

  async function handleStudentSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const studentName = (data.get("student-name") as string)?.trim() ?? "";
    const studentEmail = (data.get("student-email") as string)?.trim() ?? "";
    const studentDetails = (data.get("student-details") as string)?.trim() ?? "";
    if (!studentName || !studentEmail || !studentDetails) return;
    setStudentStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "student",
          studentName,
          studentEmail,
          studentDetails,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStudentStatus("success");
      form.reset();
    } catch {
      setStudentStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              Get in touch
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Share a few quick details.
            </h2>
            <p className="mt-3 text-sm text-slate-600 text-justify">
              Tell us about your business, or share where you are as a current
              student, graduate, or refugee youth, and we&apos;ll reply with
              simple next steps.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:hello@tbawork.com"
                className="font-medium text-primary-600 underline-offset-4 hover:underline"
              >
                hello@tbawork.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              For businesses
            </h3>
            <p className="mt-1 mb-4 text-xs text-slate-600">
              Tell us about your business and the kind of support you need.
            </p>
            <form
              className="space-y-3"
              onSubmit={handleBusinessSubmit}
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="business-name"
                  className="text-xs font-medium text-slate-700"
                >
                  Business name
                </label>
                <input
                  id="business-name"
                  name="business-name"
                  type="text"
                  autoComplete="organization"
                  required
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none transition focus:bg-white focus:border-primary-300"
                  placeholder="e.g. Moyo Foods"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="business-email"
                  className="text-xs font-medium text-slate-700"
                >
                  Work email
                </label>
                <input
                  id="business-email"
                  name="business-email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none transition focus:bg-white focus:border-primary-300"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="business-needs"
                  className="text-xs font-medium text-slate-700"
                >
                  What do you need help with?
                </label>
                <textarea
                  id="business-needs"
                  name="business-needs"
                  rows={3}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none transition focus:bg-white focus:border-primary-300"
                  placeholder="Share a short description of your projects or ongoing needs."
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={businessStatus === "sending"}
                  className="rounded-lg bg-primary-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-primary-600 disabled:opacity-60"
                >
                  {businessStatus === "sending"
                    ? "Sending…"
                    : "Send"}
                </button>
                {businessStatus === "success" && (
                  <span className="text-xs text-green-600">Sent. We&apos;ll be in touch.</span>
                )}
                {businessStatus === "error" && (
                  <span className="text-xs text-red-600">Something went wrong. Try again or email us.</span>
                )}
              </div>
              <p className="text-[11px] text-slate-500">
                You can also send details directly to{" "}
                <a
                  href="mailto:hello@tbawork.com?subject=Hire%20student%20talent"
                  className="font-medium text-primary-600 underline-offset-4 hover:underline"
                >
                  hello@tbawork.com
                </a>
                .
              </p>
            </form>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              For students, graduates & refugee youth
            </h3>
            <p className="mt-1 mb-4 text-xs text-slate-600">
              Share who you are, what you&apos;re studying or working toward,
              and the skills you want to grow.
            </p>
            <form
              className="space-y-3"
              onSubmit={handleStudentSubmit}
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="student-name"
                  className="text-xs font-medium text-slate-700"
                >
                  Full name
                </label>
                <input
                  id="student-name"
                  name="student-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none transition focus:bg-white focus:border-primary-300"
                  placeholder="e.g. Amina N."
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="student-email"
                  className="text-xs font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="student-email"
                  name="student-email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs outline-none transition focus:bg-white focus:border-primary-300"
                  placeholder="you@studentmail.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="student-details"
                  className="text-xs font-medium text-slate-700"
                >
                  Course, university & skills
                </label>
                <textarea
                  id="student-details"
                  name="student-details"
                  rows={3}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none transition focus:bg-white focus:border-primary-300"
                  placeholder="e.g. 3rd-year BCom at University X, interested in social media, design, or operations."
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={studentStatus === "sending"}
                  className="rounded-lg bg-primary-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-primary-600 disabled:opacity-60"
                >
                  {studentStatus === "sending"
                    ? "Sending…"
                    : "Send"}
                </button>
                {studentStatus === "success" && (
                  <span className="text-xs text-green-600">Sent. We&apos;ll share next steps.</span>
                )}
                {studentStatus === "error" && (
                  <span className="text-xs text-red-600">Something went wrong. Try again or email us.</span>
                )}
              </div>
              <p className="text-[11px] text-slate-500">
                You can also email your details to{" "}
                <a
                  href="mailto:hello@tbawork.com?subject=Student%20application"
                  className="font-medium text-primary-600 underline-offset-4 hover:underline"
                >
                  hello@tbawork.com
                </a>{" "}
                and we&apos;ll share the next cohort dates.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
