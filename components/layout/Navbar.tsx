"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#businesses", label: "For businesses" },
  { href: "#students", label: "For students" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-slate-100" />
      <nav className="relative mx-auto flex max-w-[68rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <Link href="#about" className="flex shrink-0 items-center gap-2" onClick={closeMobile}>
          <Image
            src="/LOGO.png"
            alt="Talent Bridge Africa logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 shrink-0 object-contain"
          />
          <span className="truncate text-base font-semibold tracking-tight text-primary-600 sm:text-lg">
            Talent Bridge Africa
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="#businesses"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800"
            >
              Hire talent
            </Link>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          whileTap={{ scale: 0.96 }}
          onClick={() => setMobileOpen((o) => !o)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary-200 hover:text-primary-700 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] z-20 bg-slate-900/20 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[72px] z-30 flex flex-col gap-4 border-b border-slate-200 bg-slate-100 px-4 py-6 md:hidden"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#businesses"
                onClick={closeMobile}
                className="inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Hire talent
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

