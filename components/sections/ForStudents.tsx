"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    title: "Real client projects",
    description:
      "Work on briefs from real businesses, not just classroom assignments or mock work.",
  },
  {
    title: "Portfolio building",
    description:
      "Graduate with a body of work you can show employers, not just a list of courses.",
  },
  {
    title: "Professional training",
    description:
      "Learn tools, workflows, and soft skills used inside modern teams and agencies.",
  },
  {
    title: "Income opportunities",
    description:
      "Earn for your time and skill while you study, with transparent pay structures.",
  },
];

export function ForStudentsSection() {
  return (
    <section id="students" className="bg-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.19, 0.86, 0.35, 1] }}
          >
            <div className="gradient-border flex h-full rounded-3xl bg-white/80 p-1 shadow-soft">
              <div className="glass-panel relative flex h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80"
                  alt="Students collaborating with laptops in a bright space"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              For students
            </p>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="block text-slate-900">
                Build a real portfolio
              </span>
              <span className="block text-primary-500">
                early in your career.
              </span>
            </h2>
            <p className="text-sm text-slate-600 text-justify">
              Join a small community of current university students, recent
              graduates, and refugee youth who are getting paid, shipping work,
              and entering interviews with stronger stories.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item.title} className="space-y-1.5">
                  <h3 className="text-xs font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
              >
                Apply As Student
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

