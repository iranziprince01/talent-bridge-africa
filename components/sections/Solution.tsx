"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="solution" className="bg-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.18, 0.89, 0.32, 1] }}
            className="gradient-border flex h-full rounded-3xl bg-white/80 p-1 shadow-soft"
          >
            <div className="glass-panel relative flex h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Students in a modern workspace collaborating on a project"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              The solution
            </p>
            <h2 className="text-balance font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="block text-slate-900">
                A managed student talent studio
              </span>
              <span className="block text-primary-500">
                for modern teams.
              </span>
            </h2>
            <p className="text-sm text-slate-600 text-justify">
              We select motivated current university students, recent graduates,
              and refugee youth, prepare them through a short, practical
              bootcamp, and place them into supervised delivery squads working
              on real client projects.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary-500" />
                <span>
                  <span className="font-medium text-primary-900">Businesses get affordable services</span>{" "}
                  across brand, content, and operations.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary-500" />
                <span>
                  <span className="font-medium text-primary-900">
                    Students, graduates, and refugee youth gain real experience
                  </span>{" "}
                  with portfolio work and references.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary-500" />
                <span>
                  <span className="font-medium text-primary-900">
                    Everyone wins:
                  </span>{" "}
                  businesses grow faster while students earn and learn.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

