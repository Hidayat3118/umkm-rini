 export const bukaWa = () => {
    const nomor = "6285349770174";
    const pesan =
      "Halo kak, saya tertarik dengan kue kering & cemilan. Boleh info produknya? 😊";

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };