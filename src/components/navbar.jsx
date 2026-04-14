"use client";

import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="mama rini"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div>
              <h1 className="text-sm md:text-lg font-semibold text-stone-800 leading-tight">
                Camilan Nusantara
              </h1>
              <p className="text-[9px] md:text-xs text-amber-800/70 uppercase tracking-widest">
                Premium Snacks & Cookies
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#products" className="text-base text-stone-600 hover:text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-lg transition">
              Produk
            </a>
            <a href="#about" className="text-base text-stone-600 hover:text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-lg transition">
              Tentang
            </a>
            <a href="#contact" className="text-base text-stone-600 hover:text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-lg transition">
              Kontak
            </a>

            <a
              href="#contact"
              className="ml-3 bg-orange-700 hover:bg-orange-800 text-white text-base font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 transition hover:scale-105 active:scale-95"
            >
              <Phone size={18} />
              Order
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 animate-fadeIn">
          <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md p-4 mt-2">

            <a href="#products" className="py-2 px-3 rounded-lg hover:bg-orange-50">
              Produk
            </a>
            <a href="#about" className="py-2 px-3 rounded-lg hover:bg-orange-50">
              Tentang
            </a>
            <a href="#contact" className="py-2 px-3 rounded-lg hover:bg-orange-50">
              Kontak
            </a>

            <a
              href="#contact"
              className="mt-2 bg-orange-700 text-white py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <Phone size={16} />
              Order Sekarang
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;