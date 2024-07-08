// pages/umkm.js

"use client";

import Head from "next/head";
import UmkmCard from "@/components/UmkmCard";
import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UmkmPage = () => {
  const [umkmList, setUmkmList] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchUmkm = async () => {
      try {
        const response = await axios.get(
          "https://sundakerta-be.vercel.app/api/umkm"
        );
        setUmkmList(response.data);
      } catch (error) {
        console.error("Error fetching UMKM data:", error);
      }
    };

    fetchUmkm();
  }, []);

  return (
    <div>
      <Head>
        <title>UMKM - Desa Sundakerta</title>
        <meta name="description" content="UMKM di Desa Sundakerta" />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold mb-8 text-center" data-aos="fade-up">
          UMKM{" "}
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
            Galeri UMKM di Desa Sundakerta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umkmList.map((umkm) => (
            <div key={umkm._id} data-aos="fade-up">
              <UmkmCard umkm={umkm} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UmkmPage;
