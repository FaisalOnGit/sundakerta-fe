"use client";

import { useState } from "react";
import axios from "axios";

const ArticleForm = ({ onArticleAdded }) => {
  const [formData, setFormData] = useState({
    judul: "",
    konten: "",
    penulis: "",
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
        "https://sundakerta-be.vercel.app/api/artikel",
        formData
      );
      onArticleAdded(response.data);
      setFormData({
        judul: "",
        konten: "",
        penulis: "",
        urlGambar: "",
      });
      alert("Artikel berhasil ditambahkan!");
    } catch (error) {
      console.error("Error adding article:", error);
      setError("Terjadi kesalahan saat menambahkan artikel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block text-gray-700">Judul</label>
        <input
          type="text"
          name="judul"
          value={formData.judul}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Konten</label>
        <textarea
          name="konten"
          value={formData.konten}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block text-gray-700">Penulis</label>
        <input
          type="text"
          name="penulis"
          value={formData.penulis}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
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

export default ArticleForm;
