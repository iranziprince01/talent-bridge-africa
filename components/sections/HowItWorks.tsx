"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, GraduationCap, Rocket, Users } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Recruit talented students",
    description:
      "We partner with universities and communities to identify high-potential students across creative, business, and tech disciplines.",
  },
  {
    icon: GraduationCap,
    title: "Train them in professional delivery",
    description:
      "Students complete an intensive bootcamp focused on client work, communication, tools, and quality expectations.",
  },
  {
    icon: ClipboardList,
    title: "Businesses submit projects",
    description:
      "Growing businesses share their needs (social media, design, admin, digital marketing and more) through simple briefs.",
  },
  {
    icon: Rocket,
    title: "Talent Bridge Africa manages delivery & quality",
    description:
      "Our Talent Bridge Africa delivery pods supervise student squads, review work, and ensure each project hits agreed outcomes.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              How it works
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="block text-slate-900">A simple path</span>
              <span className="block text-primary-500">from campus to client work.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.45,
                  ease: [0.22, 0.84, 0.36, 1],
                }}
                className="relative flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm shadow-slate-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute inset-y-10 -right-2 hidden items-center md:flex">
                    <ArrowRight className="h-4 w-4 text-slate-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

