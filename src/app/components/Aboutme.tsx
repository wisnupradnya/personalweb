"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-32 lg:px-48 text-white">
      {/* blur accent */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-3xl lg:text-5xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          A short story about who I am, what I do, and what I love to build.
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/20 shadow-xl">
            <Image
              src="/fotodiri.jpg"
              alt="I Made Wisnu Pradnya Yoga"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-8 lg:p-10"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
            I Made Wisnu Pradnya Yoga
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
            Saya adalah seorang mahasiswa berusia 20 tahun dari Bali yang saat
            ini menempuh pendidikan di{" "}
            <span className="text-white font-medium">Primakara University</span>
            . Saya memiliki ketertarikan kuat pada dunia visual, khususnya
            fotografi, videografi, dan film, serta pengembangan web modern
            menggunakan
            <span className="text-white font-medium"> Next.js</span>.
            <br />
            <br />
            Sejak SMA, saya aktif mengembangkan skill kreatif dan pernah meraih
            juara fotografi tingkat sekolah di SMAN 1 Mengwi. Salah satu karya
            yang paling berkesan adalah film pendek{" "}
            <span className="italic">“Two Side of Bali”</span>, yang menjadi
            awal eksplorasi saya dalam storytelling visual.
            <br />
            <br />
            Saat ini, saya terus menggabungkan kreativitas dan teknologi untuk
            menciptakan karya digital yang tidak hanya fungsional, tetapi juga
            memiliki nilai estetika dan identitas budaya Bali.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
