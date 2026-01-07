"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { label: "Home", href: "#Beranda" },
    { label: "About Me", href: "#Aboutme" },
    { label: "Expert", href: "#Appexpert" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Social Media", href: "#Sosialmedia" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <Link
                href="#home"
                className="text-white font-bold text-lg tracking-wide"
              >
                mdwsprd<span className="text-indigo-400"></span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8 text-sm text-gray-300">
                {menu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden text-white"
              >
                <span className="block w-6 h-0.5 bg-white mb-1" />
                <span className="block w-6 h-0.5 bg-white mb-1" />
                <span className="block w-6 h-0.5 bg-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
          >
            {menu.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-indigo-400 transition"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
