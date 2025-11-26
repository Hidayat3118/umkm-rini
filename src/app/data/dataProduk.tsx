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
    name: "Keripik Usus",
    category: "keripik",
    image: "🥨",
    description: "Keripik usus renyah dengan bumbu spesial yang bikin nagih",
    price: "Rp 15.000",
  },
  {
    id: 2,
    name: "Kacang Selimut",
    category: "keripik",
    image: "🥜",
    description: "Kacang dengan balutan tepung crispy, gurih maksimal",
    price: "Rp 18.000",
  },
  {
    id: 3,
    name: "Nastar",
    category: "kue",
    image: "🍪",
    description: "Kue kering nastar lumer di mulut dengan isian nanas asli",
    price: "Rp 55.000",
  },
  {
    id: 4,
    name: "Kastangel",
    category: "kue",
    image: "🧀",
    description: "Kue kering keju premium dengan taburan keju melimpah",
    price: "Rp 60.000",
  },
  {
    id: 5,
    name: "Putri Salju",
    category: "kue",
    image: "❄️",
    description: "Kue kering lembut dengan taburan gula halus seperti salju",
    price: "Rp 50.000",
  },
  {
    id: 6,
    name: "Kacang Amor",
    category: "kue",
    image: "🫘",
    description: "Kacang amor klasik favorit keluarga, renyah dan manis",
    price: "Rp 45.000",
  },
  {
    id: 7,
    name: "Nastar Coklat",
    category: "kue",
    image: "🍫",
    description: "Nastar dengan isian coklat lezat, perpaduan sempurna",
    price: "Rp 58.000",
  },
  {
    id: 8,
    name: "Keripik Pangsit Jeruk Purut",
    category: "keripik",
    image: "🍋",
    description: "Keripik pangsit dengan aroma jeruk purut yang segar",
    price: "Rp 20.000",
  },
];
