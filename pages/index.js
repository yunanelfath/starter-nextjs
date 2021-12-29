import { useState } from "react";
import Head from "next/head";
// import styles from "../styles/style.css";
import Slider from "react-slick";
import { useWindowSize } from "./../helper";
import { Navbar, Contact, Footer } from "./../components";

const bannerWordList = [
  {
    title: "FAST",
    desc: "Cepat dan tanggap dalam pelayanan serta turn arround time pengujian lebih cepat.",
  },
];

const serviceList = [
  {
    image: "image-service-1.png",
    title: "Udara Ambien",
    body: "Suhu, Arah Angin, Kecepatan Angin, Tekanan, TSP, SO2, CO, NO2, O3, Pb, H2S, NH3, Kebisingan",
  },
  {
    image: "image-service-2.png",
    title: "Udara Lingkungan Kerja",
    body: "ISBB, Kebisingan, Pencahayaan, Suhu, Kelembaban, NH3, CO, SO2, NO2, O3,Total  Dust, Total Bakteri, Total Jamur, Psikologi, Ergonomi, Sanitasi",
  },
  {
    image: "image-service-3.png",
    title: "Air Limbah",
    body: "Suhu, TDS, TSS, pH, Fe & Mn (terlarut), Ba, Cu, Zn, Cr (VI), Cr Total, Cd, Hg, Pb, St, Ar, Se, Ni, Co, CN, H2S, F, Cl2, NH3-N, NO2-N, BOD5, COD, MBAS, Fenol, Minyak & Lemak",
  },
  {
    image: "image-service-4.png",
    title: "Air Permukaan",
    body: "Suhu, TDS, TSS, pH, BOD, COD, DO, PO4, Nitrat, Amoniak, As, Co, Ba, B, Se, Cd, Cr (VI), Cu, Fe, Pb, Mn, Hg, Zn, Cl-, CN-, F-, Nitrit, SO4, Free Cl2, S sebagai H2S, Fecal Coliform, Total Coliform, Minyak & Lemak, MBAS, Fe",
  },
  {
    image: "image-service-5.png",
    title: "Udara Emisi",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  },
  {
    image: "image-service-6.png",
    title: "Kebisingan",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  },
  {
    image: "image-service-7.png",
    title: "Air Higiene Sanitasi",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  },
  {
    image: "image-service-8.png",
    title: "Air Laut",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
};

const clientList = [
  { image: "image-client-1.png", name: "PT. Semen Indonesia (Plant Tuban)" },
  { image: "image-client-2.png", name: "PT. Terminal Petikemas Surabaya" },
  { image: "image-client-3.png", name: "PT. Ecooils Indonesia" },
  { image: "image-client-4.png", name: "PT. Dwi Yoga Respati " },
];

const linkList = [
  { name: "Home", url: "/" },
  { name: "About Us" },
  { name: "Our Services" },
  { name: "Contact us" },
  { name: "Our Clients" },
  { name: "Tracking Result" },
  { name: "Career" },
];

const socmedList = [
  { icon: "icon-instagram.png", url: "" },
  { icon: "icon-twitter.png", url: "" },
  { icon: "icon-linkedin.png", url: "" },
  { icon: "icon-facebook.png", url: "" },
];

export default function Home() {
  const screenSize = useWindowSize();

  return (
    <div>
      <Head>
        <title>Genau Lab | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
