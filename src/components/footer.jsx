import React from "react";
import { ShoppingBag, Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full overflow-hidden h-16 w-16">
                <Image
                  src="/logo.png"
                  alt="produk"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Camilan Nusantara</h3>
                <p className="text-gray-400 text-sm">
                  Premium Snacks & Cookies
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Menyediakan camilan berkualitas dengan rasa autentik yang cocok
              untuk keluarga dan oleh-oleh spesial.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#products"
                  className="hover:text-orange-400 transition"
                >
                  Produk
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>0853-4977-0174</span>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Banjarmasin, Kalimantan Selatan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Mama Alfi. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Dibuat dengan <span className="text-red-500">❤️</span> untuk UMKM
            Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
