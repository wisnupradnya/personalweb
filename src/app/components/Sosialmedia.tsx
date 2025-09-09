"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Sosialmedia() {
  return (
    <div className="bg-white px-6 py-5 lg:px-60 lg:py-20">
      {/* Judul */}
      <motion.h2
        className="text-center text-2xl lg:text-4xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }} // <-- biar bisa animasi lagi
      >
        Sosial Media
      </motion.h2>

      {/* Background container */}
      <motion.div
        className="bg-gray-200 rounded-3xl flex flex-wrap justify-center p-10 lg:p-20 gap-y-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        viewport={{ once: false }}
      >
        {/* Instagram 1 */}
        <motion.div
          className="w-full md:w-1/2 flex items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <Image
              src="/Instagram.png"
              alt="Instagram"
              width={500}
              height={500}
              className="w-10 lg:w-30 object-cover"
            />
          </motion.div>
          <motion.a
            href="https://instagram.com/mdwisnuu_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm lg:text-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            @mdwisnuu_
          </motion.a>
        </motion.div>

        {/* Instagram 2 */}
        <motion.div
          className="w-full md:w-1/2 flex items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image
              src="/Instagram.png"
              alt="Instagram"
              width={500}
              height={500}
              className="w-10 lg:w-30 object-cover"
            />
          </motion.div>
          <motion.a
            href="https://instagram.com/inferno.creativee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm lg:text-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            @inferno.creativee
          </motion.a>
        </motion.div>

        {/* TikTok */}
        <motion.div
          className="w-full md:w-1/2 flex items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <Image
              src="/tiktok.png"
              alt="TikTok"
              width={500}
              height={500}
              className="w-10 lg:w-30 object-cover"
            />
          </motion.div>
          <motion.a
            href="https://www.tiktok.com/@zentaa16?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm lg:text-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            @Zentaa16
          </motion.a>
        </motion.div>

        {/* YouTube */}
        <motion.div
          className="w-full md:w-1/2 flex items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <Image
              src="/Youtube.png"
              alt="YouTube"
              width={500}
              height={500}
              className="w-10 lg:w-30 object-cover"
            />
          </motion.div>
          <motion.a
            href="https://www.youtube.com/@mdwisnuu16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm lg:text-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            @mdwisnuu16
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
