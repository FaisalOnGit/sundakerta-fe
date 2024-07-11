"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div
      className={`relative w-full pb-[56.25%] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <CampSite
              backgroundImage="bg-bg-img-1"
              title="Curug Arga"
              subtitle="Sundakerta, Sukahening"
              peopleJoined="50+ Joined"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CampSite
              backgroundImage="bg-bg-img-2"
              title="Arga Camp Ground"
              subtitle="Sundakerta, Sukahening"
              peopleJoined="50+ Joined"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CampSite
              backgroundImage="bg-bg-img-3"
              title="Wisata Kebon Kopi"
              subtitle="Sundakerta, Sukahening"
              peopleJoined="50+ Joined"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CampSite
              backgroundImage="bg-bg-img-4"
              title="Arga Camp Ground"
              subtitle="Sundakerta, Sukahening"
              peopleJoined="50+ Joined"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CampSite
              backgroundImage="bg-bg-img-5"
              title="Arga Hotspring"
              subtitle="Sundakerta, Sukahening"
              peopleJoined="50+ Joined"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CampSite
              backgroundImage="bg-bg-img-6"
              title="Wisata Kebon Kopi"
              subtitle="Sundakerta, Sukahening"
              peopleJoined="50+ Joined"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Camp;
