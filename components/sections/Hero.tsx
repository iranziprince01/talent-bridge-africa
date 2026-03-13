"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-bg-soft to-bg-soft pb-16 pt-32 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(12,96,255,0.12),transparent_55%)]" />
      <div className="mx-auto flex max-w-[68rem] flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-20 lg:px-8">
        <div className="flex-1 space-y-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            custom={2}
            className="space-y-5 pb-10 sm:pb-12"
          >
            <h1 className="text-balance font-display text-4xl font-extrabold tracking-tight leading-relaxed text-slate-900 sm:text-5xl md:text-[2.9rem]">
              Graduate With Experience,
              <span className="block pb-1 text-transparent bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 bg-clip-text">
                Not Just A Degree
              </span>
            </h1>
            <p className="max-w-xl font-sans text-sm text-slate-600 text-justify sm:text-base">
              Talent Bridge Africa connects current university students, recent
              graduates, and refugee youth with growing businesses that need
              flexible, affordable digital talent.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            custom={3}
            className="flex flex-col gap-4 pt-1 sm:pt-2 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 flex-wrap gap-3">
              <Link
                href="#businesses"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600"
              >
                Hire Student Talent
              </Link>
              <Link
                href="#students"
                className="inline-flex items-center justify-center rounded-full border border-primary-100 bg-white px-5 py-2.5 text-sm font-semibold text-primary-900 shadow-sm transition hover:border-primary-200 hover:bg-primary-50"
              >
                Join As A Student
              </Link>
            </div>
          </motion.div>

          
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <div className="gradient-border flex h-full rounded-3xl bg-white/80 p-1 shadow-soft">
            <div className="glass-panel flex h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Students collaborating on a creative project"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

