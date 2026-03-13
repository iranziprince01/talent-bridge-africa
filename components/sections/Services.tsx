"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Code2,
  FileText,
  Globe2,
  Image,
  Mail,
  MousePointer2,
  PenTool,
  Search,
  Smartphone,
  Video,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Social media management",
    description:
      "Planning, publishing, and reporting across core channels with clear performance metrics.",
  },
  {
    icon: PenTool,
    title: "Content writing and copywriting",
    description:
      "SEO blog posts, website copy, and marketing content that drives traffic and conversions.",
  },
  {
    icon: Image,
    title: "Graphic design and logos",
    description:
      "Logos, social graphics, and on-brand visuals for startups and small businesses.",
  },
  {
    icon: Code2,
    title: "Web development",
    description:
      "Marketing sites, landing pages, and front-end improvements on existing web properties.",
  },
  {
    icon: Search,
    title: "SEO and content optimization",
    description:
      "Keyword research, on-page SEO, and content optimization to improve search visibility.",
  },
  {
    icon: Video,
    title: "Video editing and short-form content",
    description:
      "Reels, Shorts, and social video edits that keep audiences engaged and campaigns on brand.",
  },
  {
    icon: Smartphone,
    title: "Virtual assistant and admin support",
    description:
      "Inbox management, scheduling, data entry, and light admin tasks for busy teams.",
  },
  {
    icon: FileText,
    title: "Data entry and research",
    description:
      "Lead lists, desk research, data hygiene, and structured information capture.",
  },
  {
    icon: MousePointer2,
    title: "Presentation and pitch decks",
    description:
      "Investor decks, sales collateral, and internal presentations that are ready to send.",
  },
  {
    icon: BookOpen,
    title: "Proposal and grant writing",
    description:
      "Writing, editing, and formatting for proposals, bids, and grant applications.",
  },
  {
    icon: Mail,
    title: "Email marketing and campaigns",
    description:
      "Newsletter copy, sequences, and campaign setup to nurture leads and customers.",
  },
  {
    icon: BarChart3,
    title: "Proofreading and editing",
    description:
      "Polished copy, consistent tone, and error-free content for blogs, ads, and documents.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-[68rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
              Services
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <span className="block text-slate-900">
                Student-powered services
              </span>
              <span className="block text-primary-500">
                for growing businesses.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.4,
                  ease: [0.19, 0.86, 0.35, 1],
                }}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-md hover:shadow-primary-50"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-500 text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          And many more…
        </p>
      </div>
    </section>
  );
}

