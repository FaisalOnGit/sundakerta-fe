"use client";

import Head from "next/head";
import ArticleCard from "@/components/ArticleCard";
import axios from "axios";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://sundakerta-be.vercel.app/api/artikel"
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Head>
        <title>Artikel - Desa Sundakerta</title>
        <meta name="description" content="Artikel tentang Desa Sundakerta" />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold mb-8 text-center" data-aos="fade-up">
          Artikel{" "}
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-green-500 to-teal-400">
            Sundakerta
          </span>
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.judul}
              description={article.konten.substring(0, 100) + "..."}
              href={`/artikel/${article._id}`} // Menggunakan _id dari MongoDB
              imageUrl={article.urlGambar} // Menggunakan urlGambar dari artikel
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ArtikelPage;
