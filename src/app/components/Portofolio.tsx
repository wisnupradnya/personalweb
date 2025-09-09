"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSwiper() {
  return (
    <div className="bg-white px-6 py-20 lg:pt-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto bg-gray-200 rounded-3xl px-6 mb-10"
      >
        <div className="text-black">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-black text-2xl lg:text-5xl font-bold flex flex-wrap justify-center py-10 lg:py-20"
          >
            My Portofolio Project
          </motion.h1>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-2xl"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/web1.png"
                  alt="Slide 1"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="text-black mb-10 lg:mb-10 mt-5 lg:mt-10">
                  Eccomers Project Front End
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/web2.png"
                  alt="Slide 2"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="text-black mb-10 lg:mb-10 mt-5 lg:mt-10">
                  Interior Web Project
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/web3.png"
                  alt="Slide 3"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="text-black mb-10 lg:mb-10 mt-5 lg:mt-10">
                  Front End Navigation Project
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/web4.png"
                  alt="Slide 3"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="text-black mb-10 lg:mb-10 mt-5 lg:mt-10">
                  Front End Project
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/web5.png"
                  alt="Slide 3"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="text-black mb-10 lg:mb-10 mt-5 lg:mt-10">
                  System Management Toko Project
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/web6.png"
                  alt="Slide 3"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <p className="text-black mb-10 lg:mb-10 mt-5 lg:mt-10">
                  Front End Project
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
}
