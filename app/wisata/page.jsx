// pages/wisata.js

"use client";

import Head from "next/head";
import WisataCard from "@/components/WisataCard";
import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WisataPage = () => {
  const [wisataList, setWisataList] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchWisata = async () => {
      try {
        const response = await axios.get(
          "https://sundakerta-be.vercel.app/api/wisata"
        );
        setWisataList(response.data);
      } catch (error) {
        console.error("Error fetching Wisata data:", error);
      }
    };

    fetchWisata();
  }, []);

  return (
    <div>
      <Head>
        <title>Wisata - Desa Sundakerta</title>
        <meta name="description" content="Wisata di Desa Sundakerta" />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold mb-8 text-center" data-aos="fade-up">
          Wisata{" "}
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-green-500 to-teal-400">
            Sundakerta
          </span>
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xl text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Temukan destinasi wisata menarik di Desa Sundakerta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wisataList.map((wisata) => (
            <div key={wisata._id} data-aos="fade-up">
              <WisataCard wisata={wisata} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WisataPage;
