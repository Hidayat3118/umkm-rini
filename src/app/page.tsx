"use client";
import React, { useState } from "react";
import {
  ShoppingBag,
  Phone,
  MapPin,
  Instagram,
  Star,
  Award,
  Heart,
  Package,
  Zap,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Users, BadgeCheck } from "lucide-react";
import { products } from "./data/dataProduk";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const LandingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 bg-red-500">
      {/* Header/Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-6 border border-orange-100">
              <Sparkles className="text-orange-500" size={16} />
              <span className="text-sm font-semibold text-orange-600">
                Dibuat Fresh Setiap Hari
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">
              Camilan Terbaik
              <span className="text-orange-500 block">Untuk Keluarga Anda</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nikmati keripik renyah & kue premium dengan resep tradisional yang
              sudah dipercaya banyak pelanggan.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-600 transition shadow-sm hover:shadow-md">
                <ShoppingBag size={20} />
                Lihat Produk
              </a>

              <a className="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-50 transition">
                <Phone size={20} />
                Hubungi
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 justify-center lg:justify-start text-center">
              <div className="flex flex-col items-center gap-1">
                <Users className="text-orange-500" size={22} />
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-xs text-gray-500">Pelanggan</div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <Package className="text-orange-500" size={22} />
                <div className="text-2xl font-bold text-orange-500">8</div>
                <div className="text-xs text-gray-500">Produk</div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <BadgeCheck className="text-green-500" size={22} />
                <div className="text-2xl font-bold text-green-500">100%</div>
                <div className="text-xs text-gray-500">Halal & Fresh</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 relative">
            {/* background blur */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30"></div>

            <div className="relative backdrop-blur-sm p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/cemilan.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/kue.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/kueRingan.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="relative h-40 md:h-56 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/kueBasah.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white  border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ITEM */}
            <div className=" md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition group text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-100 transition">
                <Award className="text-orange-500" size={28} />
              </div>

              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                Kualitas Terjamin
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Menggunakan bahan premium pilihan dengan proses higienis dan
                standar kualitas tinggi untuk hasil terbaik.
              </p>
            </div>

            {/* ITEM */}
            <div className=" md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition group text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-100 transition">
                <Zap className="text-orange-500" size={28} />
              </div>

              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                Selalu Fresh
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Diproduksi setiap hari dalam jumlah terbatas untuk menjaga rasa,
                tekstur, dan kualitas tetap maksimal.
              </p>
            </div>

            {/* ITEM */}
            <div className=" md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition group text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-100 transition">
                <Heart className="text-green-500" size={28} />
              </div>

              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                Harga Bersahabat
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Harga terjangkau dengan kualitas premium, cocok untuk camilan
                keluarga maupun oleh-oleh spesial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-5 py-2 rounded-full mb-4 border border-orange-200">
            <Package className="text-orange-500" size={18} />
            <span className="text-sm font-bold text-orange-700">
              Produk Pilihan
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Produk Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berbagai pilihan camilan lezat untuk setiap momen spesial Anda
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl scale-105"
                : "bg-white text-gray-700 hover:shadow-lg hover:scale-105"
            }`}
          >
            Semua Produk
          </button>
          <button
            onClick={() => setActiveCategory("keripik")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md ${
              activeCategory === "keripik"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl scale-105"
                : "bg-white text-gray-700 hover:shadow-lg hover:scale-105"
            }`}
          >
            Keripik
          </button>
          <button
            onClick={() => setActiveCategory("kue")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md ${
              activeCategory === "kue"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl scale-105"
                : "bg-white text-gray-700 hover:shadow-lg hover:scale-105"
            }`}
          >
            Kue Kering
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="h-56 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center text-8xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform">
                  {product.image}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-orange-600">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                    <Star className="fill-current" size={16} />
                  </div>
                </div>
                <a
                  href="#contact"
                  className="block text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-xl hover:shadow-xl transition-all font-bold flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  <ShoppingBag size={20} />
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 border-y-2 border-orange-100"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-2xl mb-6 shadow-lg">
                <Star className="text-white" size={48} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Tentang Kami
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong className="text-orange-600">Camilan Nusantara</strong>{" "}
                adalah UMKM lokal yang berkomitmen menghadirkan camilan
                tradisional Indonesia dengan cita rasa autentik dan kualitas
                terbaik. Setiap produk dibuat dengan penuh perhatian menggunakan
                resep turun temurun yang telah terbukti kelezatannya selama
                puluhan tahun.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Kami menggunakan bahan-bahan pilihan berkualitas tinggi dan
                proses produksi yang higienis untuk memastikan setiap gigitan
                memberikan kepuasan maksimal. Dari keripik yang super renyah
                hingga kue kering yang lembut dan lumer di mulut, semua dibuat
                fresh setiap hari khusus untuk Anda.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <TrendingUp
                    className="text-orange-500 mx-auto mb-3"
                    size={40}
                  />
                  <div className="font-bold text-gray-800">
                    Berkembang Sejak 2015
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <Award className="text-orange-500 mx-auto mb-3" size={40} />
                  <div className="font-bold text-gray-800">
                    Sertifikat Halal MUI
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <Heart className="text-orange-500 mx-auto mb-3" size={40} />
                  <div className="font-bold text-gray-800">
                    Ribuan Pelanggan Setia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600">
            Siap melayani pesanan dan pertanyaan Anda dengan ramah
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="space-y-6">
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 hover:shadow-lg transition-all group border-2 border-green-200"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                  <Phone className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-1 text-gray-800">
                    WhatsApp
                  </h3>
                  <p className="text-green-600 font-bold text-lg">
                    +62 812-3456-7890
                  </p>
                  <p className="text-sm text-gray-600">
                    Klik untuk chat langsung
                  </p>
                </div>
                <div className="text-green-600">
                  <TrendingUp size={28} />
                </div>
              </a>

              <a
                href="https://instagram.com/camilannusantara"
                className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-100 hover:shadow-lg transition-all group border-2 border-pink-200"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                  <Instagram className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-1 text-gray-800">
                    Instagram
                  </h3>
                  <p className="text-pink-600 font-bold text-lg">
                    @camilannusantara
                  </p>
                  <p className="text-sm text-gray-600">
                    Follow untuk update produk
                  </p>
                </div>
                <div className="text-pink-600">
                  <Sparkles size={28} />
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-100 border-2 border-orange-200">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-2xl shadow-md">
                  <MapPin className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-1 text-gray-800">
                    Lokasi Kami
                  </h3>
                  <p className="text-orange-600 font-bold text-lg">
                    Banjarmasin, Kalimantan Selatan
                  </p>
                  <p className="text-sm text-gray-600">
                    Siap kirim ke seluruh Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-gray-100">
              <a
                href="https://wa.me/6281234567890"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-2xl hover:shadow-2xl transition-all font-black text-xl text-center hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone size={28} />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
