"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const apps = [
  { name: "Adobe Photoshop", icon: "/potosop.png" },
  { name: "Adobe Premiere Pro", icon: "/premier.png" },
  { name: "Visual Studio Code", icon: "/vscode.png" },
  { name: "CapCut Pro", icon: "/CapCut.png" },
];

export default function AppExpert() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-28 lg:px-48 text-white">
      {/* blur accent */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-3xl lg:text-5xl font-bold">Tools & Applications</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Applications and tools I use to build digital products and creative
          content.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <Image
                src={app.icon}
                alt={app.name}
                width={80}
                height={80}
                className="object-contain group-hover:scale-105 transition"
              />
            </div>
            <p className="text-sm lg:text-base font-medium text-gray-200 text-center">
              {app.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
