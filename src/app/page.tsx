'use client'; 
import React, { useState } from 'react';
import { ShoppingBag, Phone, MapPin, Instagram, Clock, Star, Award, Heart, Package, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { products } from './data/dataProduk';


const LandingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 bg-red-500">
      
      {/* Header/Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-xl shadow-lg">
                <ShoppingBag className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                  Camilan Nusantara
                </h1>
                <p className="text-xs text-gray-500 font-semibold">Premium Snacks & Cookies</p>
              </div>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition font-semibold text-lg">
                Produk
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition font-semibold text-lg">
                Tentang
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition font-semibold text-lg">
                Kontak
              </a>
              <a 
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Phone size={20} />
                Order Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-5 py-2 rounded-full mb-6 border border-orange-200">
              <Sparkles className="text-orange-500" size={18} />
              <span className="text-sm font-bold text-orange-700">Dibuat Fresh Setiap Hari</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Camilan Terbaik
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Untuk Keluarga
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Nikmati kelezatan keripik super renyah dan kue kering premium dengan resep tradisional yang sudah terbukti selama puluhan tahun.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#products" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg"
              >
                <ShoppingBag size={24} />
                Lihat Produk
              </a>
              <a 
                href="#contact" 
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-orange-500 flex items-center gap-3"
              >
                <Phone size={24} />
                Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600">500+</div>
                <div className="text-sm text-gray-600 font-semibold">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-600">8</div>
                <div className="text-sm text-gray-600 font-semibold">Varian Produk</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600">100%</div>
                <div className="text-sm text-gray-600 font-semibold">Halal & Fresh</div>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-2xl opacity-60"></div>
              
              {/* Main Visual */}
              <div className="relative bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
                    <div className="text-6xl mb-3">🍪</div>
                    <div className="font-bold text-gray-800">Kue Kering</div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
                    <div className="text-6xl mb-3">🥨</div>
                    <div className="font-bold text-gray-800">Keripik</div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
                    <div className="text-6xl mb-3">🧀</div>
                    <div className="font-bold text-gray-800">Premium</div>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
                    <div className="text-6xl mb-3">❄️</div>
                    <div className="font-bold text-gray-800">Fresh Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 border-y-2 border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 transition-all group">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="font-black text-2xl mb-3 text-gray-800">Kualitas Terjamin</h3>
              <p className="text-gray-600 font-medium">Bahan premium pilihan dengan standar kebersihan tinggi</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 transition-all group">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={36} />
              </div>
              <h3 className="font-black text-2xl mb-3 text-gray-800">Selalu Fresh</h3>
              <p className="text-gray-600 font-medium">Diproduksi setiap hari untuk kesegaran maksimal</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 transition-all group">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="text-white" size={36} />
              </div>
              <h3 className="font-black text-2xl mb-3 text-gray-800">Harga Terjangkau</h3>
              <p className="text-gray-600 font-medium">Harga bersahabat untuk semua kalangan keluarga</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-5 py-2 rounded-full mb-4 border border-orange-200">
            <Package className="text-orange-500" size={18} />
            <span className="text-sm font-bold text-orange-700">Produk Pilihan</span>
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
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105'
            }`}
          >
            Semua Produk
          </button>
          <button
            onClick={() => setActiveCategory('keripik')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md ${
              activeCategory === 'keripik'
                ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105'
            }`}
          >
            Keripik
          </button>
          <button
            onClick={() => setActiveCategory('kue')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md ${
              activeCategory === 'kue'
                ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105'
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
                <span className="relative z-10 group-hover:scale-110 transition-transform">{product.image}</span>
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-orange-600">{product.price}</span>
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
      <section id="about" className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 border-y-2 border-orange-100">
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
                <strong className="text-orange-600">Camilan Nusantara</strong> adalah UMKM lokal yang berkomitmen menghadirkan camilan tradisional Indonesia dengan cita rasa autentik dan kualitas terbaik. Setiap produk dibuat dengan penuh perhatian menggunakan resep turun temurun yang telah terbukti kelezatannya selama puluhan tahun.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Kami menggunakan bahan-bahan pilihan berkualitas tinggi dan proses produksi yang higienis untuk memastikan setiap gigitan memberikan kepuasan maksimal. Dari keripik yang super renyah hingga kue kering yang lembut dan lumer di mulut, semua dibuat fresh setiap hari khusus untuk Anda.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <TrendingUp className="text-orange-500 mx-auto mb-3" size={40} />
                  <div className="font-bold text-gray-800">Berkembang Sejak 2015</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <Award className="text-orange-500 mx-auto mb-3" size={40} />
                  <div className="font-bold text-gray-800">Sertifikat Halal MUI</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <Heart className="text-orange-500 mx-auto mb-3" size={40} />
                  <div className="font-bold text-gray-800">Ribuan Pelanggan Setia</div>
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
              <a href="https://wa.me/6281234567890" className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 hover:shadow-lg transition-all group border-2 border-green-200">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                  <Phone className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-1 text-gray-800">WhatsApp</h3>
                  <p className="text-green-600 font-bold text-lg">+62 812-3456-7890</p>
                  <p className="text-sm text-gray-600">Klik untuk chat langsung</p>
                </div>
                <div className="text-green-600">
                  <TrendingUp size={28} />
                </div>
              </a>
              
              <a href="https://instagram.com/camilannusantara" className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-100 hover:shadow-lg transition-all group border-2 border-pink-200">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                  <Instagram className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl mb-1 text-gray-800">Instagram</h3>
                  <p className="text-pink-600 font-bold text-lg">@camilannusantara</p>
                  <p className="text-sm text-gray-600">Follow untuk update produk</p>
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
                  <h3 className="font-black text-xl mb-1 text-gray-800">Lokasi Kami</h3>
                  <p className="text-orange-600 font-bold text-lg">Banjarmasin, Kalimantan Selatan</p>
                  <p className="text-sm text-gray-600">Siap kirim ke seluruh Indonesia</p>
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
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-xl">
                <ShoppingBag className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black">Camilan Nusantara</h3>
                <p className="text-gray-400 text-sm">Premium Snacks & Cookies</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 font-medium mb-1">
                © 2024 Camilan Nusantara. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Dibuat dengan ❤️ untuk UMKM Indonesia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;