"use client";

import AboutData from "@/data/about.json";
import { AboutResponse } from "@/models/About";
import Image from "next/image";
import { motion } from "framer-motion";

import Head from "next/head";

const Gallery = async () => {
  const data: AboutResponse = AboutData;

  return (
    <>
      <Head>
        <title>Tentang Kami</title>
        <meta name="description" content="sasas" />
      </Head>
      <section className="relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-24 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Tentang{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
                  Kami
                </span>
              </motion.h1>
              <div className="max-w-3xl mx-auto">
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Anggota Tim KKN Unsil Sundakerta 2024
                </motion.p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-12">
                {data.about.map((d, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      className="w-32 h-32 md:w-64 md:h-64"
                      src={d.picture_url}
                      alt={d.name}
                    />
                    <div>
                      <p className="md:text-xl font-bold">{d.name}</p>
                      <p className="font-semibold tracking-wider">{d.major}</p>
                      <p className="tracking-wider">{d.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
