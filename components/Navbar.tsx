'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react if you haven't
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
  const [isOpen, setIsOpen] = useState(false);

  // Helper to check active state (used in both mobile and desktop)
  const isLinkActive = (href: string) => 
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          
          {/* --- LOGO --- */}
          <Link 
            href="/" 
            className="text-sm font-medium tracking-tight text-slate-100 z-50 relative"
            onClick={() => setIsOpen(false)}
          >
            Amir | Portfolio
          </Link>

          {/* --- DESKTOP NAV (Hidden on Mobile) --- */}
          {/* We added 'hidden md:flex' to hide this pill on small screens */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-800/60 bg-slate-900/60 px-1.5 py-1 text-sm text-slate-300 shadow-[0_10px_50px_-28px_rgba(14,165,233,0.55)]">
            {navItems.map((item) => {
              const isActive = isLinkActive(item.href);

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

          {/* --- MOBILE TOGGLE (Visible on Mobile) --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white relative z-50 p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => {
                 const isActive = isLinkActive(item.href);
                 
                 return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors",
                      isActive ? "text-cyan-400" : "text-slate-300 hover:text-slate-100"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              <hr className="border-slate-800/60" />
              
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center justify-center w-full py-4 text-slate-900 bg-cyan-400 font-bold rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}