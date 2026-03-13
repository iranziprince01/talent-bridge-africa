import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Students", href: "#students" },
    { label: "Businesses", href: "#businesses" },
  ],
  company: [
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-primary-800 bg-primary-900 text-white">
      <div className="mx-auto flex max-w-[68rem] flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <h3 className="text-sm font-semibold tracking-tight">
              Talent Bridge Africa
            </h3>
            <p className="text-sm text-white text-justify">
              Connecting current students, graduates, and refugee youth with ambitious growing
              businesses across Africa.
            </p>
            <div className="flex gap-3 pt-2 text-white">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 hover:border-white hover:text-white">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 hover:border-white hover:text-white">
                <Instagram className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm text-white md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
                Quick links
              </h4>
              <ul className="space-y-2">
                {footerLinks.product.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
                Stay in the loop
              </h4>
              <p className="mb-3 text-xs text-white">
                Subscribe for updates on new cohorts and opportunities.
              </p>
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-9 flex-1 rounded-full border border-white/60 bg-white/10 px-3 text-xs text-white placeholder:text-primary-100 outline-none ring-0 transition focus:bg-white focus:text-primary-900 focus:placeholder:text-primary-400 focus:border-white"
                />
                <button
                  type="submit"
                  className="h-9 rounded-full bg-white px-4 text-xs font-semibold text-primary-900 shadow-sm transition hover:bg-primary-50"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-primary-800 pt-4 text-xs text-white sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Talent Bridge Africa. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-white">Privacy</button>
            <button className="hover:text-white">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

