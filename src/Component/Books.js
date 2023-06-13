import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "../aos.css";
import { withTranslation } from "react-i18next";

function Books({ t, i18n }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // Kitap Listesi
  const books = [
    {
      id: 1,
      name: "Yüzüklerin Efendisi",
      img: "https://m.media-amazon.com/images/I/41T1j0rWe+L._SX336_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      name: "Hayvan Çiftliği",
      img: "https://m.media-amazon.com/images/I/41lQqDBAfnL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 3,
      name: "Savaş Sanatı",
      img: "https://m.media-amazon.com/images/I/31elP8PqgML._SX303_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      name: "Kaplanın Sırtında",
      img: "https://m.media-amazon.com/images/I/41p5H9SWMTL._SX293_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      name: "Harry Potter ve Lanetli Çocuk",
      img: "https://m.media-amazon.com/images/I/51Q1TGJza2L._SX349_BO1,204,203,200_.jpg",
    },
    {
      id: 6,
      name: "Gece Yarısı Kütüphanesi",
      img: "https://m.media-amazon.com/images/I/41Dyod1EufS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 7,
      name: "Balıkçı ve Oğlu",
      img: "https://m.media-amazon.com/images/I/41VyZ9OeGjS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 8,
      name: "Harry Potter ve Melez Prens",
      img: "https://m.media-amazon.com/images/I/51TRmih7AhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 9,
      name: "Suç ve Ceza",
      img: "https://m.media-amazon.com/images/I/41R0QL3uelL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 10,
      name: "1984",
      img: "https://m.media-amazon.com/images/I/41snCU4rifL._SX320_BO1,204,203,200_.jpg",
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-14">
      <div className="mx-auto mb-10 lg:max-w-xl text-center">
        <p className="inline-block px-14 py-px text-lg md:text-3xl  tertiary-font tracking-wider text-black rounded-full ">
          {t("hpComponent3")}
        </p>
      </div>
      <div className="grid gap-8 mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:max-w-screen-lg">
        {books.map((kitap, id) => (
          <a href="/" key={id}>
            <div>
              <div
                className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72"
                data-aos="zoom-in-down"
              >
                <img
                  className="absolute object-center w-full h-full rounded"
                  src={kitap.img}
                  alt=""
                />
              </div>
              <p className="text-sm md:text-md font-medium secondary-font">
                {kitap.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default withTranslation()(Books);
