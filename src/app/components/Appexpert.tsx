"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Appexpert() {
  return (
    <div className="bg-white px-6 py-6 lg:px-20 lg:py-20">
      <div className="bg-gray-200 rounded-3xl">
        <div>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-black text-4xl lg:text-5xl flex justify-center pt-10 lg:pt-10 font-bold"
          >
            Expert Aplicasion
          </motion.h1>
        </div>
        <div className="flex flex-wrap justify-center lg:gap-20 px-20 py-10">
          {/* CapCut Pro */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-35 h-40 flex items-center justify-center"
            >
              <Image
                src="/potosop.png"
                alt="CapCut Pro"
                width={160}
                height={160}
                className="object-contain rounded-3xl"
              />
            </motion.div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-black text-base font-bold lg:font-normal lg:text-xl mt-2"
            >
              Adobe Photo Shop
            </motion.p>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-40 h-40 flex items-center justify-center"
            >
              <Image
                src="/premier.png"
                alt="Adobe Premiere Pro"
                width={160}
                height={160}
                className="object-contain"
              />
            </motion.div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-black text-base font-bold lg:font-normal lg:text-xl mt-2"
            >
              Adobe Premiere Pro
            </motion.p>
          </div>

          {/* Visual Studio Code */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-40 h-40 flex items-center justify-center"
            >
              <Image
                src="/vscode.png"
                alt="Visual Studio Code"
                width={160}
                height={160}
                className="object-contain"
              />
            </motion.div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-black text-base font-bold lg:font-normal lg:text-xl mt-2"
            >
              Visual Studio Code
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-40 h-40 flex items-center justify-center"
          >
            <Image
              src="/CapCut.png"
              alt="Visual Studio Code"
              width={160}
              height={160}
              className="object-contain rounded-2xl"
            />
          </motion.div>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-black text-base font-bold lg:font-normal lg:text-xl mb-20 mt-2"
          >
            CapCut Pro
          </motion.p>
        </div>
      </div>
    </div>
  );
}
