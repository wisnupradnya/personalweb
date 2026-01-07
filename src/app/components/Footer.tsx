"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand / Nama */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Wisnu Pradnya Yoga</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Wisnu Pradnya. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="#Beranda" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#Aboutme" className="hover:text-white transition">
            About
          </Link>
          <Link href="#Appexpert" className="hover:text-white transition">
            Expert
          </Link>
          <Link href="#Portofolio" className="hover:text-white transition">
            Portofolio
          </Link>
          <Link href="#Sosialmedia" className="hover:text-white transition">
            Social Media
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex gap-6">
          <Link
            href="https://instagram.com/mdwisnuu_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image
              src="/Instagram.png"
              alt="Instagram"
              width={28}
              height={28}
              className="object-contain"
            />
          </Link>

          <Link
            href="https://wa.me/6281547473104"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image
              src="/wa.png"
              alt="Instagram"
              width={28}
              height={28}
              className="object-contain"
            />
          </Link>

          <Link
            href="https://www.tiktok.com/@zentaa16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image
              src="/tiktok.png"
              alt="TikTok"
              width={28}
              height={28}
              className="object-contain"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@mdwisnuu16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image
              src="/Youtube.png"
              alt="YouTube"
              width={28}
              height={28}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
