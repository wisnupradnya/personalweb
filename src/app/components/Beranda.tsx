"use client";

import React from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Beranda() {
  return (
    <div className="bg-white">
      <div className="text-black text-4xl md:text-6xl lg:text-9xl font-bold flex flex-wrap justify-center text-center px-10 py-10 lg:px-20 lg:py-20">
        <m.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Wellcome To <br />
          My Personal Website
        </m.h1>
      </div>
      <div className="text-sm md:text-2xl lg:text-2xl text-black px-20 py-10">
        <Link
          href="#Aboutme"
          className=" border border-gray-400 rounded-2xl px-5 py-3 "
        >
          View More
        </Link>
      </div>
    </div>
  );
}
