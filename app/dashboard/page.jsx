"use client";

import Head from "next/head";
import { useState } from "react";
import ArticleForm from "@/components/ArticleForm";
import GaleriForm from "@/components/GaleriForm";
import UmkmForm from "@/components/UmkmForm";
import WisataForm from "@/components/WisataForm";
import "aos/dist/aos.css";

const DashboardPage = () => {
  const [articles, setArticles] = useState([]);
  const [galeri, setGaleri] = useState([]);
  const [umkm, setUmkm] = useState([]);
  const [wisata, setWisata] = useState([]);

  const handleArticleAdded = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const handleGaleriAdded = (newGaleri) => {
    setGaleri([...galeri, newGaleri]);
  };

  const handleUmkmAdded = (newUmkm) => {
    setUmkm([...umkm, newUmkm]);
  };

  const handleWisataAdded = (newWisata) => {
    setWisata([...wisata, newWisata]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Dashboard - Desa Sundakerta</title>
        <meta
          name="description"
          content="Dashboard untuk mengelola konten Desa Sundakerta"
        />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold mb-8 text-center" data-aos="fade-up">
          Dashboard{" "}
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-green-500 to-teal-400">
            Sundakerta
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Tambah Artikel
            </h2>
            <ArticleForm onArticleAdded={handleArticleAdded} />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Tambah Galeri
            </h2>
            <GaleriForm onGaleriAdded={handleGaleriAdded} />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Tambah UMKM
            </h2>
            <UmkmForm onUmkmAdded={handleUmkmAdded} />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Tambah Wisata
            </h2>
            <WisataForm onWisataAdded={handleWisataAdded} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
