// components/GalleryPage.js

"use client";

import Head from "next/head";
import Gallery from "@/components/Galeri";
import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalImage from "react-modal-image";

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchGallery = async () => {
      try {
        const response = await axios.get(
          "https://sundakerta-be.vercel.app/api/galeri"
        );
        setGalleryImages(response.data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchGallery();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Head>
        <title>Galeri - Desa Sundakerta</title>
        <meta
          name="description"
          content="Galeri gambar tentang Desa Sundakerta"
        />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">
          Galeri Sundakerta
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xl text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Galeri foto lokasi pariwisata dan kegiatan warga Desa Sundakerta
          </p>
        </div>
        {/* Galeri Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image._id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              data-aos="fade-up"
              onClick={() => openModal(image)}
            >
              <ModalImage
                small={image.urlGambar}
                large={image.urlGambar}
                alt={image.judul}
              />
              <h2 className="font-bold text-center mt-2">{image.judul}</h2>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="max-w-lg w-full bg-white rounded-lg p-4 relative">
              <ModalImage
                small={selectedImage.urlGambar}
                large={selectedImage.urlGambar}
                alt={selectedImage.judul}
              />
              <h2 className="font-bold text-center mt-2">
                {selectedImage.judul}
              </h2>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryPage;
