"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Degrees without experience",
    description:
      "Many graduates finish university having never shipped real work for real clients.",
  },
  {
    title: "Entry roles need 2–3 years",
    description:
      "Employers demand experience even for junior roles, locking out talented graduates before they start.",
  },
  {
    title: "Stress, unemployment, lost potential",
    description:
      "Students feel stuck, while growing businesses struggle to access reliable, affordable talent.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-4 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
            The challenge
          </p>
          <h2 className="text-balance font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
            <span className="block text-slate-900">Graduates are ready.</span>
            <span className="block text-primary-500">Experience is missing.</span>
          </h2>
          <p className="max-w-xl text-sm text-slate-600 text-justify">
            The biggest gap isn&apos;t grades, it&apos;s{" "}
            <span className="font-medium text-primary-900">
              real work shipped for real clients
            </span>{" "}
            while people are still current students, recent graduates, or
            refugee youth trying to get a first break.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.21, 0.86, 0.33, 0.99],
              }}
              className="flex min-h-[150px] flex-col gap-2.5 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

