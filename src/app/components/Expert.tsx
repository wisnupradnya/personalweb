"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    desc: "Building responsive and scalable interfaces using modern technologies.",
  },
  {
    title: "Next.js & React",
    desc: "Component-driven development with performance and SEO in mind.",
  },
  {
    title: "UI / UX & Figma",
    desc: "Designing clean, intuitive interfaces focused on user experience.",
  },
  {
    title: "Photography & Videography",
    desc: "Visual storytelling for brands, products, and digital content.",
  },
];

const education = [
  {
    title: "Primakara University",
    year: "2023 – Present",
    desc: "Computer Science with focus on frontend development and creative projects.",
  },
  {
    title: "SMAN 1 Mengwi",
    year: "2020 – 2023",
    desc: "Social sciences with creative and digital exploration.",
  },
];

export default function ProfileSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-28 lg:px-56 text-white">
      {/* Blur accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[140px] rounded-full" />

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mb-24"
      >
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
          Frontend Developer & Creative
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          I build modern web interfaces and visual content that help brands
          communicate clearly, efficiently, and professionally.
        </p>
      </motion.div>

      {/* Skills */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">{skill.title}</h3>
            <p className="mt-3 text-gray-300">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h3 className="text-2xl font-bold mb-10">Education</h3>

        <div className="space-y-6 max-w-2xl">
          {education.map((e, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:justify-between border-b border-white/20 pb-4"
            >
              <div>
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-gray-300">{e.desc}</p>
              </div>
              <p className="text-sm text-gray-400 mt-2 sm:mt-0">{e.year}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
