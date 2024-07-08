import { useState } from "react";
import axios from "axios";

const WisataForm = ({ onWisataAdded }) => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    lokasi: "",
    hargaTiket: "",
    urlGambar: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sundakerta-be.vercel.app/api/wisata",
        formData
      );
      onWisataAdded(response.data);
      setFormData({
        nama: "",
        deskripsi: "",
        lokasi: "",
        hargaTiket: "",
        urlGambar: "",
      });
      alert("Wisata berhasil ditambahkan!");
    } catch (error) {
      console.error("Error adding wisata:", error);
      setError("Terjadi kesalahan saat menambahkan wisata.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block text-gray-700">Nama</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Deskripsi</label>
        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Lokasi</label>
        <input
          type="text"
          name="lokasi"
          value={formData.lokasi}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Harga Tiket</label>
        <input
          type="number"
          name="hargaTiket"
          value={formData.hargaTiket}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">URL Gambar</label>
        <input
          type="text"
          name="urlGambar"
          value={formData.urlGambar}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default WisataForm;
