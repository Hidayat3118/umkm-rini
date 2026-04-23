interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Usus Crispy",
    category: "keripik",
    image: "/images/cemilan.jpeg",
    description: "Usus crispy renyah dengan bumbu gurih",
    price: "Rp 10.000 / 70gr",
  },
  {
    id: 2,
    name: "Keripik Pangsit",
    category: "keripik",
    image: "/images/keripikjeruk.jpg",
    description: "Keripik pangsit renyah cocok untuk cemilan",
    price: "Rp 10.000 / 70gr", // karena belum ada info
  },
  {
    id: 3,
    name: "Kue Kering (Putri Salju)",
    category: "kue",
    image: "/images/kuesalju.jpg",
    description: "Kue kering lembut dengan taburan gula halus",
    price: "Rp 25.000 / 250gr",
  },
  {
    id: 4,
    name: "Kue Kering (Kacang Selimut)",
    category: "kue",
    image: "/images/kacangSelubung.jpeg",
    description: "Kue kering kacang renyah dan manis",
    price: "Rp 25.000 / 250gr",
  },
  {
    id: 5,
    name: "Kue Kering (Nastar Coklat)",
    category: "kue",
    image: "/images/kue2.jpeg",
    description: "Nastar dengan isian coklat lezat",
    price: "Rp 25.000 / 250gr",
  },
  {
    id: 6,
    name: "Kue Bulu Jadul (ukuran 20)",
    category: "kue",
    image: "/images/bulu-20.jpeg",
    description: "Kue bulu jadul lembut isi 20 pcs",
    price: "Rp 35.000",
  },
  {
    id: 7,
    name: "Kue Bulu Jadul (ukuran 12)",
    category: "kue",
    image: "/images/bulu-12.jpeg",
    description: "Kue bulu jadul lembut isi 12 pcs",
    price: "Rp 17.000",
  },
  {
    id: 8,
    name: "Kue Ulang Tahun (18 cm)",
    category: "kue",
    image: "/images/ultah.jpeg",
    description: "Kue ulang tahun spesial ukuran 18 cm",
    price: "Rp 85.000",
  },
];
