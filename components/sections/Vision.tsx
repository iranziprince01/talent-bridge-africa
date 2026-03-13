"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionSection() {
  return (
    <section id="vision" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              Vision
            </p>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="block text-slate-900">
                A continent-wide student
              </span>
              <span className="block text-primary-500">
                talent network.
              </span>
            </h2>
            <p className="text-sm text-slate-600 text-justify">
              Our goal is simple: any driven current university student, recent
              graduate, or refugee youth in Africa should be able to plug into
              meaningful, paid work while they study or look for their first
              role.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.19, 0.86, 0.35, 1] }}
            className="gradient-border flex h-full rounded-3xl bg-white/80 p-1 shadow-soft"
          >
            <div className="glass-panel relative flex h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                alt="Skyline and campus representing a connected African talent network"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

