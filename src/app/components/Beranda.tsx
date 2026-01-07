"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Beranda() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden 
                 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Decorative Glow */}
      <div className="absolute top-32 left-20 w-[420px] h-[420px] bg-indigo-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-20 right-0 w-[320px] h-[320px] bg-purple-500/20 blur-[140px] rounded-full" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-0 flex items-center min-h-screen">
        <div className="text-center lg:text-left w-full">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-widest text-gray-400 uppercase mb-6"
          >
            Creative Developer & Visual Storyteller
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white font-extrabold leading-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            I Craft <span className="text-indigo-400">Digital Experiences</span>
            <br className="hidden sm:block" />
            That Feel Alive
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 text-gray-300 max-w-2xl mx-auto lg:mx-0"
          >
            Saya menggabungkan kreativitas visual, storytelling, dan teknologi
            modern seperti Next.js untuk menciptakan website dan konten digital
            yang berkarakter, elegan, dan bermakna.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#about"
              className="px-8 py-4 rounded-full bg-white text-slate-900 
                         font-semibold hover:scale-105 transition"
            >
              Explore About Me
            </Link>

            <Link
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-white/30 
                         text-white hover:bg-white/10 transition"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
