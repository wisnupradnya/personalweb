"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram Personal",
    username: "@mdwisnuu_",
    link: "https://instagram.com/mdwisnuu_",
    icon: "/Instagram.png",
  },
  {
    name: "Instagram Creative",
    username: "@inferno.creativee",
    link: "https://instagram.com/inferno.creativee",
    icon: "/Instagram.png",
  },
  {
    name: "TikTok",
    username: "@Zentaa16",
    link: "https://www.tiktok.com/@zentaa16",
    icon: "/tiktok.png",
  },
  {
    name: "YouTube",
    username: "@mdwisnuu16",
    link: "https://www.youtube.com/@mdwisnuu16",
    icon: "/Youtube.png",
  },
];

export default function Sosialmedia() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-20 lg:px-60">
      {/* Decorative blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full" />

      {/* Title */}
      <motion.h2
        className="relative z-10 text-center text-3xl lg:text-4xl font-bold text-white mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Social Media
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 35px rgba(99,102,241,0.4)",
            }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="object-contain"
              />
            </motion.div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-white">
                {item.username}
              </span>
              <span className="text-sm text-gray-300">{item.name}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
