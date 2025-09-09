"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar utama */}
      <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-20 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">wisnu Pradnya</h1>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 text-sm md:text-lg lg:text-xl">
            <Link href="/#Beranda" className="hover:text-amber-500 transition">
              Home
            </Link>
            <Link href="/#Aboutme" className="hover:text-amber-500 transition">
              About Me
            </Link>
            <Link
              href="/#Appexpert"
              className="hover:text-amber-500 transition"
            >
              Expert
            </Link>
            <Link
              href="/#Portofolio"
              className="hover:text-amber-500 transition"
            >
              Portofolio
            </Link>
            <Link
              href="/#Sosialmedia"
              className="hover:text-amber-500 transition"
            >
              Social Media
            </Link>
          </div>

          {/* Tombol Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 relative w-6 h-6 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menu Mobile Overlay (dipisah dari nav biar ga dorong konten) */}
      <div
        className={`fixed inset-0 text-black bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium transform transition-transform duration-500 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/#Beranda"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-500 transition"
        >
          Home
        </Link>
        <Link
          href="/#Aboutme"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-500 transition"
        >
          About Me
        </Link>
        <Link
          href="/#Appexpert"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-500 transition"
        >
          Expert
        </Link>
        <Link
          href="/#Portofolio"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-500 transition"
        >
          Portofolio
        </Link>
        <Link
          href="/#Sosialmedia"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-500 transition"
        >
          Social Media
        </Link>
      </div>
    </>
  );
}
