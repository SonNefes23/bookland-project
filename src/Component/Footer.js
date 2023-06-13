import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-primary_color primary-font">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="text-lg font-medium tracking-wide text-secondary_color">
                Bookland'ı Deneyin
              </p>
              <ul className="mt-2 space-y-2 font-normal">
                <li>
                  <Link to="/kayıt-ol" className="text-white/75">
                    Hesap Oluştur
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/75">
                    Uygulamayı İndir
                  </Link>
                </li>
                <li>
                  <Link to="/sss" className="text-white/75">
                    Sıkça Sorulan Sorular
                  </Link>
                </li>
                <li>
                  <Link to="/giris" className="text-white/75">
                    Hesabına Giriş Yap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-secondary_color">
                Bizi Takip Edin
              </p>
              <ul className="mt-2 space-y-2 font-normal">
                <li>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/"
                    className="text-white/75"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://twitter.com/"
                    className="text-white/75"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/"
                    className="text-white/75"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-secondary_color">
                Bookland Hakkında
              </p>
              <ul className="mt-2 space-y-2 font-normal">
                <li>
                  <Link to="/bookland-hakkında" className="text-white/75">
                    Biz Kimiz ?
                  </Link>
                </li>
                <li>
                  <Link to="/uyelık-kosulları" className="text-white/75">
                    Üyelik Koşulları
                  </Link>
                </li>
                <li>
                  <Link to="/cerezler-hakkında" className="text-white/75">
                    Çerezler Hakkında
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-secondary_color">
                Booklandı Deneyin
              </p>
              <ul className="mt-2 space-y-2 font-normal">
                <li>
                  <button
                    onClick={() => clickHandle("tr")}
                    className="text-secondary_color p-2 border-2 border-secondary_color w-2/3 flex font-medium mb-3"
                  >
                    <p className="mr-12">Tr</p>{" "}
                    <p className="hidden lg:inline-flex">Türkçe</p>
                  </button>
                  <button
                    onClick={() => clickHandle("en")}
                    className="text-secondary_color p-2 border-2 border-secondary_color w-2/3 flex font-medium"
                  >
                    <p className="mr-12">En</p>{" "}
                    <p className="hidden lg:inline-flex">İngilizce</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-white/60 md:flex-row">
          <p className="text-white/75 text-[0.700rem] md:text-sm font-light primary-font">
            &copy; Copyright 2023 Lorem Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
