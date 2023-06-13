import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "../../aos.css";

function BooksProduct() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // Kitap Listesi
  const books = [
    {
      id: 1,
      name: "Yüzüklerin Efendisi",
      author: "J. R. R. Tolkien",
      img: "https://m.media-amazon.com/images/I/41T1j0rWe+L._SX336_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      name: "Hayvan Çiftliği",
      author: "George Orwell",
      img: "https://m.media-amazon.com/images/I/41lQqDBAfnL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 3,
      name: "Savaş Sanatı",
      author: "Sun Tzu",
      img: "https://m.media-amazon.com/images/I/31elP8PqgML._SX303_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      name: "Kaplanın Sırtında",
      author: "Zülfü Livaneli",
      img: "https://m.media-amazon.com/images/I/41p5H9SWMTL._SX293_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      author: "J. K. Rowling",
      name: "Harry Potter ve Lanetli Çocuk",
      img: "https://m.media-amazon.com/images/I/51Q1TGJza2L._SX349_BO1,204,203,200_.jpg",
    },
    {
      id: 6,
      name: "Gece Yarısı Kütüphanesi",
      author: "Matt Haig",
      img: "https://m.media-amazon.com/images/I/41Dyod1EufS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 7,
      name: "Balıkçı ve Oğlu",
      author: "Zülfü Livaneli",
      img: "https://m.media-amazon.com/images/I/41VyZ9OeGjS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 8,
      name: "Harry Potter ve Melez Prens",
      author: "J. K. Rowling",
      img: "https://m.media-amazon.com/images/I/51TRmih7AhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 9,
      name: "Suç ve Ceza",
      author: "Dostoyevski",
      img: "https://m.media-amazon.com/images/I/41R0QL3uelL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 10,
      name: "1984",
      author: "George Orwell",
      img: "https://m.media-amazon.com/images/I/41snCU4rifL._SX320_BO1,204,203,200_.jpg",
    },
    {
      id: 11,
      name: "Anna Karenina",
      author: "Tolstoy ",
      img: "https://m.media-amazon.com/images/I/31o4mzhcwpL._SX302_BO1,204,203,200_.jpg",
    },
    {
      id: 12,
      name: "Martin Eden",
      author: "Jack London",
      img: "https://m.media-amazon.com/images/I/41sc5yxCTWL.jpg",
    },
    {
      id: 13,
      name: "Baskerville'lerin Köpeği",
      author: "Arthur Conan Doyle",
      img: "https://m.media-amazon.com/images/I/411ld1LVyuL._SX330_BO1,204,203,200_.jpg",
    },
    {
      id: 14,
      name: "Veba Geceleri",
      author: "Orhan Pamuk",
      img: "https://m.media-amazon.com/images/I/51OGDrqkEVL._SX319_BO1,204,203,200_.jpg",
    },
    {
      id: 15,
      name: "Kara Kitap",
      author: "Orhan Pamuk",
      img: "https://m.media-amazon.com/images/I/51VCLcAcllL._SX319_BO1,204,203,200_.jpg",
    },
    {
      id: 16,
      name: "Huzursuzluk",
      author: "Zülfü Livaneli",
      img: "https://m.media-amazon.com/images/I/41vjaXVc0gL._SX342_BO1,204,203,200_.jpg",
    },
    {
      id: 17,
      name: "Kuyucakli Yusuf",
      author: "Sabahattin Ali",
      img: "https://m.media-amazon.com/images/I/419ntex0DkL._SX318_BO1,204,203,200_.jpg",
    },
    {
      id: 18,
      name: "Tutunamayanlar",
      author: "Oğuz Atay",
      img: "https://m.media-amazon.com/images/I/519L309hUHL._SX344_BO1,204,203,200_.jpg",
    },
    {
      id: 19,
      name: "Ince Memed I.",
      author: "Yaşar Kemal",
      img: "https://m.media-amazon.com/images/I/41RUR0IiMOL._SX344_BO1,204,203,200_.jpg",
    },
    {
      id: 20,
      name: "Dune",
      author: "Frank Herbert",
      img: "https://m.media-amazon.com/images/I/31VLj-7bchL._SX320_BO1,204,203,200_.jpg",
    },
    {
      id: 21,
      name: "Allah De Ötesini Bırak 2",
      author: "Uğur Koşar",
      img: "https://m.media-amazon.com/images/I/41bxWIRzBTL._SX319_BO1,204,203,200_.jpg",
    },
    {
      id: 22,
      name: "Semerkant",
      author: "Amin Maalouf",
      img: "https://m.media-amazon.com/images/I/51ipB6e0iVL._SX321_BO1,204,203,200_.jpg",
    },
    {
      id: 23,
      name: "İnsancıklar",
      author: "Dostoyevski",
      img: "https://m.media-amazon.com/images/I/41og0ZBs1pL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
      id: 24,
      name: "Fareler Ve İnsanlar",
      author: "John Steinbeck",
      img: "https://m.media-amazon.com/images/I/414R6gf7F0L._SX333_BO1,204,203,200_.jpg",
    },
    {
      id: 25,
      name: "Sümeyye Solmaz",
      author: "Ahmet Başkan Ve Suçları",
      img: "https://r.resimlink.com/AdjCW.jpeg",
    },
  ];
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-14">
      <div className="grid gap-8 mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:max-w-screen-lg">
        {books.map((kitap, id) => (
          <a href="/" key={id}>
            <div>
              <div
                className="relative pb-44 mb-2  shadow-2xl lg:pb-72"
                data-aos="zoom-in-down"
              >
                <img
                  className="absolute object-center w-full h-full "
                  src={kitap.img}
                  alt=""
                />
              </div>
              <p className="text-sm md:text-md font-medium secondary-font">
                {kitap.name}
              </p>
              <p className="text-[0.600rem] md:text-md font-medium secondary-font">
                {kitap.author}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BooksProduct;
