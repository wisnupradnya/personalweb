"use client";

import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

export default function Aboutme() {
  return (
    <div className="bg-white px-10 py-10 lg:px-20 lg:py-30">
      <div>
        <m.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-black font-bold flex justify-center text-2xl lg:text-5xl mb-10 lg:mb-20"
        >
          About Me
        </m.h1>
      </div>
      <div className=" flex flex-row justify-center ">
        <m.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=""
        >
          <Image
            src="/fotodiri.jpg"
            alt="foto"
            width={300}
            height={100}
            className="rounded-full relative w-50 h-50 lg:w-100 lg:h-100"
          />
        </m.div>
      </div>
      <m.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="text-black flex justify-center text-3xl lg:text-5xl py-5 lg:py-10 font-bold">
            Draft About Me
          </h1>
          <m.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto px-4  bg-gray-200  rounded-3xl"
          >
            <m.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-black text-justify px-4 py-4 "
            >
              Halo, saya I Made Wisnu Pradnya Yoga, seorang pemuda Bali berusia
              20 tahun yang saat ini sedang menempuh pendidikan di Primakara
              University. Saya memiliki minat besar di bidang film, serta sedang
              mendalami pengembangan web dengan teknologi Next.js, HTML, dan
              CSS. Selain itu, saya juga aktif berkarya di dunia fotografi,
              videografi, dan pilot drone. Sejak SMA, saya pernah meraih juara
              fotografi tingkat sekolah di SMA Negeri 1 Mengwi, pengalaman yang
              semakin memperkuat ketertarikan saya pada dunia visual. Salah satu
              karya yang cukup berkesan adalah film “Two Side of Bali”, serta
              beberapa project kecil lainnya yang saya kerjakan untuk terus
              mengasah keterampilan. Saat ini, saya berfokus untuk terus
              berkembang, baik dalam industri kreatif maupun teknologi, dengan
              harapan dapat menghasilkan karya yang bermanfaat sekaligus
              memperkenalkan identitas budaya Bali melalui media digital.
            </m.p>
          </m.div>
        </div>
      </m.div>
    </div>
  );
}
