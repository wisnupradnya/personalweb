"use client";

import { motion } from "framer-motion";

type Step = {
  title: string;
  subtitle?: string;
  year: string;
  desc: string;
};

const steps: Step[] = [
  {
    title: "Sekolah Menengah Pertama",
    subtitle: "SMPN 1 Mengwi",
    year: "2017 – 2020",
    desc: "Dasar-dasar akademik.",
  },
  {
    title: "Sekolah Menengah Atas",
    subtitle: "SMAN 1 Mengwi",
    year: "2020 – 2023",
    desc: "Fokus di Ilmu Ilmu Sosial",
  },
  {
    title: "Kuliah",
    subtitle: "Primakara University",
    year: "2023",
    desc: "Fokus di pemrograman & proyek kreatif.",
  },
  // Tambah lagi kalau perlu…
];

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="py-14 px-10 lg:px-50 bg-white text-black"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Riwayat Pendidikan
      </h2>

      {/* Garis tengah untuk desktop */}
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-black" />

        <ul className="space-y-10">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={i}
                className="md:grid md:grid-cols-2 md:gap-10 items-center"
              >
                {/* Kolom kiri/kanan bergantian di desktop */}
                <div className={isLeft ? "md:order-1" : "md:order-2"}>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative md:pr-10 md:text-right"
                  >
                    {/* Dot di garis tengah (desktop) */}
                    <span
                      className={`hidden md:block absolute top-6 ${
                        isLeft ? "right-[-9px]" : "left-[-9px]"
                      } h-4 w-4 rounded-full bg-white border-2 border-amber-500`}
                    />
                    <p className="text-sm text-gray-500">{s.year}</p>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    {s.subtitle && (
                      <p className="text-gray-700">{s.subtitle}</p>
                    )}
                    <p className="mt-2 text-gray-600">{s.desc}</p>
                  </motion.div>
                </div>

                <div className={isLeft ? "md:order-2" : "md:order-1"}>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className={`relative ${isLeft ? "md:pl-10" : "md:pr-10"}`}
                  >
                    {/* Dot untuk mobile (garis kiri) */}
                    <div className="md:hidden absolute left-0 top-6 h-3 w-3 rounded-full bg-amber-500" />

                    {/* Kartu isi (tanpa foto) */}
                    <div className="rounded-2xl shadow border bg-white p-6">
                      <p className="text-sm text-gray-500">{s.year}</p>
                      <p className="font-medium text-lg">{s.title}</p>
                      {s.subtitle && (
                        <p className="text-gray-700">{s.subtitle}</p>
                      )}
                      <p className="mt-2 text-gray-600">{s.desc}</p>
                    </div>
                  </motion.div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
