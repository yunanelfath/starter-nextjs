import { useState } from "react";
import Head from "next/head";
// import styles from "../styles/style.css";
import Slider from "react-slick";
import { useWindowSize } from "./../helper";
import { Navbar, Contact, Footer } from "./../components";
import { companyMissionList, valueList, certList } from "./../helper/const";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
};

export default function About() {
  const screenSize = useWindowSize();

  return (
    <div>
      <Head>
        <title>Genau Lab | About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        {!screenSize.windowMobile && !screenSize.windowTablet && (
          <header className="mt-20 w-full bg-gray-300 relative">
            <div
              className="w-full bg-cover bg-center"
              style={{
                height: "36rem",
                background: "green",
              }}
            ></div>
            <div className="absolute top-0 mx-20 my-20 w-1/3 h-full flex flex-col justify-center items-center">
              <div className="mb-16">
                <p className="text-brand-primary font-bold text-4xl">
                  ABOUT US
                </p>
                <p className="text-lg text-gray-700">
                  lorem ipsum blablabla
                </p>
              </div>
            </div>
          </header>
        )}

        {(screenSize.windowMobile || screenSize.windowTablet) && (
          <header className="w-full bg-gray-300 relative">
            <div
              className="w-full bg-cover bg-center"
              style={{
                height: "36rem",
                backgroundImage: "url('image-header-mobile.png')",
              }}
            ></div>
            <div className="absolute top-0 mx-12">
              <div className="my-4">
                <p className="text-brand-primary font-bold text-xl mb-4">
                  ABOUT US
                </p>
                <p className="text-sm">
                lorem ipsum blablabla
                </p>
              </div>
            </div>
          </header>
        )}

        <div className="fixed right-6 bottom-6 z-10">
          <a
            href="http://wa.me/628113081435"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icon-whatsapp.png" className="w-12 md:w-16" />
          </a>
        </div>

        <section className="my-8 md:mx-24 md:my-24">
          <div className="text-center">
            <p className="text-brand-secondary font-medium text-2xl">
              GENAU <span className="font-bold">VISI</span>
            </p>

            <div className="my-8 md:mt-24">
              <p className="text-gray-700">
                Menjadi Laboratorium jasa penguji lingkungan dengan tiga nilai
                utama yaitu
              </p>
              <p className="font-bold text-gray-700 text-2xl">
                Fast, Accurate, dan Professional.
              </p>
            </div>
          </div>
        </section>

        <section
          className="p-8 md:px-24 md:py-24"
          style={{ backgroundColor: "rgba(16, 163, 59, 0.2)" }}
        >
          <div className="flex flex-col md:flex-row md:justify-around">
            <p className="text-brand-secondary font-medium text-2xl mb-4">
              GENAU <span className="font-bold">MISI</span>
            </p>

            <div>
              {companyMissionList.map((val, i) => (
                <div key={i} className="mb-2">
                  <p className="text-gray-700">{`${i + 1}. ${val}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="m-8 md:mx-24 md:my-24">
          <div>
            <p className="text-brand-secondary text-center font-medium text-2xl">
              GENAU <span className="font-bold">VALUES</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 md:my-16 mx-8">
              {valueList.map((val, i) => (
                <div key={i} className="text-center">
                  <img src={val.icon} className="h-16 mx-auto mb-4" />
                  <p className="font-medium text-xl text-brand-primary my-4">
                    {val.title}
                  </p>
                  <p className="font-medium text-gray-700">{val.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-24">
            {certList.map((val, i) => (
              <div key={i} className="text-center mx-8">
                <img src={val.image} className="mx-auto mb-4" />
                <p className="font-medium text-gray-700 my-4">{val.name}</p>
              </div>
            ))}
          </div>
        </section>

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
