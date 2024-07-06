"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <motion.div
        className="hero-map"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
        </motion.div>

        <motion.h1
          className="bold-52 lg:bold-88"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore Sundakerta
        </motion.h1>

        <motion.p
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Temukan pesona dan keindahan Desa Sundakerta. Bergabunglah dengan kami
          untuk mengalami budaya unik dan alam yang memukau dari desa kami.
        </motion.p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="bintang"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Ulasan Terbaik
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Kunjungi Kami" variant="btn_green" />
          <Button
            type="button"
            title="Pelajari Lebih Lanjut"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </motion.div>

      <motion.div
        className="relative flex flex-1 items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lokasi</p>
              <Image src="/close.svg" alt="tutup" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Desa Sundakerta</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Jarak</p>
              <p className="bold-20 text-white">5 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Ketinggian</p>
              <p className="bold-20 text-white">250 m</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
