// pages/app/page.tsx
import dynamic from "next/dynamic";
import Head from "next/head";
import "leaflet/dist/leaflet.css";
import "aos/dist/aos.css";

const Hero = dynamic(() => import("@/components/Hero"));
const Camp = dynamic(() => import("@/components/Camp"));
const Guide = dynamic(() => import("@/components/Guide"));
const Features = dynamic(() => import("@/components/Features"));
const GetApp = dynamic(() => import("@/components/GetApp"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const MapSection = dynamic(() => import("@/components/MapSection"));

const Page = () => {
  return (
    <div>
      <Head>
        <title>Desa Sundakerta</title>
        <meta name="description" content="Halaman utama Desa Sundakerta" />
      </Head>

      <main>
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <Testimonials />
        <MapSection />
        <GetApp />
      </main>
    </div>
  );
};

export default Page;