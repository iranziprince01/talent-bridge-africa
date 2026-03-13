"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    title: "Lower cost than agencies",
    description:
      "Access structured delivery at a fraction of traditional agency or full-time hire costs.",
  },
  {
    title: "Young digital-native talent",
    description:
      "Students are where your customers are online and bring fresh thinking to your brand.",
  },
  {
    title: "Managed quality delivery",
    description:
      "Talent Bridge Africa supervises work, reviews outputs, and ensures standards are met.",
  },
  {
    title: "Fast turnaround",
    description:
      "Lean student squads move quickly, especially on recurring content and operations.",
  },
];

export function ForBusinessesSection() {
  return (
    <section id="businesses" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              For businesses
            </p>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="block text-slate-900">
                Reliable, flexible talent
              </span>
              <span className="block text-primary-500">
                without the overhead.
              </span>
            </h2>
            <p className="text-sm text-slate-600 text-justify">
              Turn your &ldquo;we&apos;ll get to it&rdquo; list into shipped work,
              without long retainers or premature full-time hires.
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
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600"
              >
                Hire Talent
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.19, 0.86, 0.35, 1] }}
          >
            <div className="gradient-border flex h-full rounded-3xl bg-white/80 p-1 shadow-soft">
              <div className="glass-panel relative flex h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Small business team reviewing work together"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

