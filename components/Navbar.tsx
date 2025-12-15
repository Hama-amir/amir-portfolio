'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Software", href: "/software" },
  { label: "Mechanical", href: "/mechanical" },
  { label: "Product", href: "/product" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium tracking-tight text-slate-100">
          Amir | Portfolio
        </Link>

        <nav className="relative flex items-center gap-1 rounded-full border border-slate-800/60 bg-slate-900/60 px-1.5 py-1 text-sm text-slate-300 shadow-[0_10px_50px_-28px_rgba(14,165,233,0.55)]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-1 transition-colors",
                  isActive ? "text-slate-50" : "hover:text-slate-100"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-0 rounded-full bg-cyan-500/20 ring-1 ring-cyan-400/60"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

