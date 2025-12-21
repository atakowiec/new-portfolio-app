"use client"

import {useState} from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {AnimatedButton} from "@/components/AnimatedComponents";
import {useLocale} from "@/context/InternationalizationContext";
import { Libre_Barcode_39_Extended } from "next/font/google";

export const barcode = Libre_Barcode_39_Extended({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barcode",
  display: "swap"
});


const navLinks = [
  {label: "Home", href: "#"},
  {label: "Skills", href: "#skills"},
  {label: "Projects", href: "#projects"},
  {label: "Contact", href: "#contact"},
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const locale = useLocale();

  function handleClick(href: string) {
    setOpen(false);
    if (href === "#") {
      window.scrollTo({top: 0, behavior: "smooth"})
      history.replaceState(null, "", ' ');
    } else {
      window.scrollTo({top: document.getElementById(href)?.offsetTop, behavior: "smooth"})
      window.location.hash = href
    }
  }

  return (
    <motion.header
      initial={{top: -100}}
      animate={{top: 0}}
      transition={{duration: 0.3}}
      className="fixed top-0 left-0 right-0 z-50 bg-blue-950/90 backdrop-blur-md border-b border-purple-500/20"
    >
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`/${locale}`}
            style={{height: "80%", fontSize: "45px"}}
            className={`text-text-primary ${barcode.className}`}
          >
            MC
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({label, href}) => (
              <AnimatedButton key={label} onClick={() => handleClick(href)} className={"py-2"}>
                {label}
              </AnimatedButton>
            ))}
            <AnimatedButton
              className="rounded-lg bg-accent-purple px-4 py-2 text-black"
              initial={{scale: 1, color: "var(--color-text-primary)"}}
              whileHover={{scale: 1.1, color: "var(--color-text-primary)"}}
            >
              Resume
            </AnimatedButton>
            <LanguageSelector />
          </div>

          <div className={"md:hidden flex gap-4 items-center justify-end"}>
            <LanguageSelector />
            <AnimatedButton
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center rounded-lg border border-white/10 p-2"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-text-primary"></span>
                <span className="block h-0.5 w-6 bg-text-primary"></span>
                <span className="block h-0.5 w-6 bg-text-primary"></span>
              </div>
            </AnimatedButton>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 mx-4">
            {navLinks.map(({label, href}) => (
              <AnimatedButton key={label} onClick={() => handleClick(href)}>
                {label}
              </AnimatedButton>
            ))}
            <AnimatedButton
              className="rounded-lg bg-accent-purple px-4 py-2 text-black"
              initial={{scale: 1, color: "var(--text-primary)"}}
              whileHover={{scale: 1.02, color: "var(--text-primary)"}}
            >
              My resume
            </AnimatedButton>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const locale = useLocale();

  return (
    <div className="relative">
      <AnimatedButton
        onClick={() => setOpen(!open)}
        className="flex items-center"
      >
        {locale.toUpperCase()}
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </AnimatedButton>
      <div
        className={`absolute left-0 top-full mt-3 w-24 rounded-xl bg-secondary border border-white/10 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link href="/pl" className="block px-4 py-2 text-sm hover:bg-white/5 rounded-xl text-text-secondary">
          Polish
        </Link>
        <Link href="/en" className="block px-4 py-2 text-sm hover:bg-white/5 rounded-xl text-text-secondary">
          English
        </Link>
      </div>
    </div>
  )
}
