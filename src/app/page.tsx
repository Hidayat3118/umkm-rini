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
import { ShoppingCart } from "lucide-react";
import { Users, BadgeCheck } from "lucide-react";
import { products } from "./data/dataProduk";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { bukaWa } from "@/utils/bukaWa";
const LandingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 bg-red-500">
      {/* Header/Navbar */}
      <Navbar data-aos='fade-up'/>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-6 border border-orange-100"
            >
              <Sparkles className="text-orange-500" size={16} />
              <span className="text-sm font-semibold text-orange-600">
                Dibuat Fresh Setiap Hari
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight"
            >
              Camilan Terbaik
              <span className="text-orange-500 block">Untuk Keluarga Anda</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Nikmati keripik renyah & kue premium dengan resep tradisional yang
              sudah dipercaya banyak pelanggan.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-600 transition shadow-sm hover:shadow-md">
                <ShoppingBag size={20} />
                <p>Lihat Produk</p>
              </button>
              <button
                onClick={bukaWa}
                className="border cursor-pointer border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-50 transition"
              >
                <Phone size={20} />
                Hubungi
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 justify-center lg:justify-start text-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="400"
                className="flex flex-col items-center gap-1"
              >
                <Users className="text-orange-500" size={22} />
                <div className="text-2xl font-bold text-orange-500">100+</div>
                <div className="text-xs text-gray-500">Pelanggan</div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="500"
                className="flex flex-col items-center gap-1"
              >
                <Package className="text-orange-500" size={22} />
                <div className="text-2xl font-bold text-orange-500">8</div>
                <div className="text-xs text-gray-500">Produk</div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="600"
                className="flex flex-col items-center gap-1"
              >
                <BadgeCheck className="text-green-500" size={22} />
                <div className="text-2xl font-bold text-green-500">100%</div>
                <div className="text-xs text-gray-500">Halal & Fresh</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="flex-1 relative"
          >
            {/* background blur */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30"></div>

            <div className="relative backdrop-blur-sm p-4">
              <div className="grid grid-cols-2 gap-4">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="300"
                  className="relative h-40 md:h-56 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src="/images/cemilan.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  className="relative h-40 md:h-56 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src="/images/kue.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="500"
                  className="relative h-40 md:h-56 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src="/images/kueRingan.jpeg"
                    alt="produk"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="600"
                  className="relative h-40 md:h-56 rounded-2xl overflow-hidden group"
                >
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
      <section className="bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ITEM 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition group text-center"
            >
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

            {/* ITEM 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition group text-center"
            >
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

            {/* ITEM 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
              className="md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition group text-center"
            >
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
      <section id="products" className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center mb-14"
        >
          <span className="inline-block flex px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full mb-4">
            <span className="flex gap-2 items-center">
              <Sparkles className="text-orange-500" size={16} />
              <p>Produk Pilihan</p>
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Produk Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Berbagai pilihan camilan lezat untuk menemani setiap momen Anda
          </p>
        </div>

        {/* Filter */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {["all", "keripik", "kue"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100"
              }`}
            >
              {cat === "all"
                ? "Semua"
                : cat === "keripik"
                  ? "Keripik"
                  : "Kue Kering"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-orange-50 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-orange-600">
                    {product.price}
                  </span>
                </div>
                <button
                  onClick={bukaWa}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer bg-orange-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingCart size={18} />
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - IMAGE */}
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/all.jpeg"
                  alt="Camilan Nusantara"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* floating badge */}
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="400"
                className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg"
              >
                <p className="text-sm">Sejak 2015</p>
                <p className="font-bold text-base md:text-lg">UMKM Lokal</p>
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div>
              <span
                data-aos="fade-up"
                data-aos-duration="500"
                className="inline-block text-sm font-semibold text-orange-600 bg-orange-100 px-4 py-2 rounded-full mb-4"
              >
                Tentang Kami
              </span>

              <h2
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
              >
                Camilan Tradisional dengan Rasa Autentik
              </h2>

              <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                className="text-gray-600 mb-4 leading-relaxed"
              >
                <strong className="text-orange-600">Camilan Mama Alfi</strong>{" "}
                adalah UMKM lokal yang menghadirkan camilan tradisional
                Indonesia dengan kualitas terbaik dan cita rasa khas rumahan.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                className="text-gray-600 mb-8 leading-relaxed"
              >
                Kami menggunakan bahan pilihan dan proses higienis untuk
                memastikan setiap produk fresh, renyah, dan memuaskan di setiap
                gigitan.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:shadow-sm transition"
                >
                  <TrendingUp className="text-orange-500" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">Pengalaman</p>
                    <p className="font-semibold text-gray-800">Sejak 2015</p>
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="400"
                  className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:shadow-sm transition"
                >
                  <Award className="text-orange-500" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">Legalitas</p>
                    <p className="font-semibold text-gray-800">Halal MUI</p>
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="500"
                  className="flex items-center justify-center gap-3 p-4 border rounded-xl hover:shadow-sm transition"
                >
                  <Heart className="text-orange-500" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">Pelanggan</p>
                    <p className="font-semibold text-gray-800">100+ Loyal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Siap melayani pesanan dan pertanyaan Anda dengan cepat dan ramah
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="bg-white rounded-2xl shadow-sm border p-6 space-y-4"
            >
              {/* WhatsApp */}
              <button
                onClick={bukaWa}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                className="flex cursor-pointer w-full items-center justify-between p-5 rounded-xl border hover:shadow-md transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <Phone className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-500">0853-4977-0174</p>
                  </div>
                </div>
                <span className="text-green-500 text-sm font-semibold">
                  Chat →
                </span>
              </button>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rini__cookies/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                className="flex items-center justify-between p-5 rounded-xl border hover:shadow-md transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-pink-500 p-3 rounded-lg">
                    <Instagram className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-sm text-gray-500">@camilannusantara</p>
                  </div>
                </div>
                <span className="text-pink-500 text-sm font-semibold">
                  Kunjungi →
                </span>
              </a>

              {/* Lokasi */}
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                className="flex items-center gap-4 p-5 rounded-xl border"
              >
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Lokasi</p>
                  <p className="text-sm text-gray-500">
                    Handil Bakti, Kec. Alalak, Komplek Griya Permata, Kalimantan
                    Selatan
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="500"
                className="pt-6"
              >
                <a
                  href="https://wa.me/6285349770174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white py-4 rounded-xl text-center font-semibold hover:bg-green-600 transition hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Chat WhatsApp Sekarang
                </a>
              </div>
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
