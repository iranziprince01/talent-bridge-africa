"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section id="cta" className="bg-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.19, 0.86, 0.35, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 p-[1px] shadow-soft"
        >
          <div className="relative flex flex-col items-start gap-6 rounded-3xl bg-slate-950 px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between">
            <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.24),transparent_60%)]" />
            <div className="relative space-y-3">
              <h2 className="text-balance font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Start Your Journey With Talent Bridge Africa
              </h2>
              <p className="max-w-xl text-sm text-slate-200">
                Whether you&apos;re a growing business that needs reliable
                support, or a current student, graduate, or refugee youth ready
                to build real experience, Talent Bridge Africa gives you a clear
                next step.
              </p>
            </div>

            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#businesses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-slate-900/30 transition hover:bg-slate-100"
              >
                Hire Talent
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#students"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Join The Network
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

