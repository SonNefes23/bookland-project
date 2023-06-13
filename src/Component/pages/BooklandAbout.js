import React from "react";

function BooklandAbout() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://www.turkishmobile.com/wp-content/uploads/2020/06/Sesli-kitap-nedir-faydalar%C4%B1-zararlar%C4%B1-ve-uygulamalar%C4%B1.jpg"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Bookland Hakkında
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Bookland</span>,size eşsiz bir kitap
            deneyimi sunan bir yolculuğa davet ediyor. Biz, kitapların büyülü
            dünyasına olan tutkumuzu paylaşan bir topluluğuz. 700.000'den fazla
            başlık ve içerikle dolu geniş bir kütüphane sunarak, sınırsız okuma
            ve dinleme keyfini yaşamanızı sağlıyoruz. Misyonumuz, harika
            hikayelerle insanları bir araya getirerek dünyayı daha anlayışlı ve
            yaratıcı bir yer haline dönüştürmektir. Booklands olarak, sizin için
            en iyi kitapları seçiyor, sizi keşiflere ve hayal gücünüzü beslemeye
            teşvik ediyoruz. Siz de Booklands'e katılın ve kitapların büyülü
            dünyasını keşfedin!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BooklandAbout;
