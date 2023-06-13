import React from "react";
import kitap from "../../img/1kitap.svg";
import seslikitap from "../../img/2kitap.svg";
import Books from "../Books";
import { withTranslation } from "react-i18next";

const HomePage = ({ t, i18n }) => {
  return (
    <div>
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-32 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-2xl md:text-5xl tertiary-font tracking-tight text-primary_color">
            {t("hpComponent")}
          </h2>
          <p class="mb-4 text-md font-normal text-primary_color md:text-lg">
            {t("hpComponent1")}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-2 ">
          <img class="w-3/4 rounded-lg justify-self-end" src={kitap} alt="" />
          <img class="mt-4 w-3/4 lg:mt-24 rounded-lg" src={seslikitap} alt="" />
        </div>
      </div>

      {/* HomePage Component 2 */}

      <div className="bg-primary_color">
        <div className="flex flex-col md:flex-row justify-around items-center mx-auto  px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-16 lg:py-16">
          <div className="grid gap-6 justify-items-center items-start">
            <p className="text-white w-64 lg:w-96 text-md lg:text-2xl primary-font font-light">
              {t("hpComponent1")}
            </p>
            <a
              href="/"
              className="flex items-center bg-secondary_color w-56 lg:w-72 justify-center p-2 primary-font text-sm font-semibold rounded-full"
            >
              {t("hpComponentbutton")}
            </a>
          </div>

          <div className="flex mt-12 md:mt-0 justify-center w-32 h-44 lg:w-60 lg:h-60 m-4 ">
            <img
              className=""
              src="https://i.pinimg.com/564x/75/b6/5f/75b65fafba495e2227cd13a6cfaa51bc.jpg"
              alt=""
            />
            <img
              className="-ml-12"
              src="https://i.pinimg.com/564x/93/46/ad/9346ad5984a64c874ab0b6bd00e19003.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* HomePage Component 3 


            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-14">
                <div className="mx-auto mb-10 lg:max-w-xl text-center">
                    <p className="inline-block px-14 py-px text-lg md:text-3xl  tertiary-font tracking-wider text-black rounded-full ">
                        Şu Anda Popüler
                    </p>
                </div>
                <div className="grid gap-8 mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:max-w-screen-lg">
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/41T1j0rWe+L._SX336_BO1,204,203,200_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">Yüzüklerin Efendisi</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/41lQqDBAfnL._SX317_BO1,204,203,200_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">Hayvan Çiftliği</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/31elP8PqgML._SX303_BO1,204,203,200_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">Savaş Sanatı</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/41p5H9SWMTL._SX293_BO1,204,203,200_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">Zülfü Livaneli</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/51Q1TGJza2L._SX349_BO1,204,203,200_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">J. K. Rowling</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/41Dyod1EufS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">Matt Haig</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/41VyZ9OeGjS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">Zülfü Livaneli</p>
                        </div>
                    </a>
                    <a href="/">
                        <div>
                            <div className="relative pb-44 mb-2 rounded shadow-2xl lg:pb-72">
                                <img
                                    className="absolute object-center w-full h-full rounded"
                                    src="https://m.media-amazon.com/images/I/51TRmih7AhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                                    alt="Person"
                                />
                            </div>
                            <p className="text-sm md:text-md font-medium secondary-font">J. K. Rowling</p>
                        </div>
                    </a>
                </div>
            </div>
*/}

      {<Books />}

      {/* HomePage Component 4 / Plan Kısmı */}
      <div class="relative w-full h-full bg-primary_color">
        <div class="absolute hidden w-full lg:block h-96" />
        <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 tertiary-font text-3xl  leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              {t("hpComponent4")}
            </h2>
            <p class="text-base text-white md:text-lg">
              {t("hpComponent41")}
              <br className="hidden lg:inline-flex" /> {t("hpComponent412")}
              <br className="hidden lg:inline-flex" /> {t("hpComponent4123")}
            </p>
          </div>
          <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
            <div>
              <div class="p-8 bg-secondary_color rounded">
                <div class="mb-4 text-center">
                  <p class="text-xl font-medium tracking-wide text-black">
                    {t("starterplan")}
                  </p>
                  <div class="flex items-center justify-center">
                    <p class="mr-2 text-5xl font-semibold text-black lg:text-6xl line-through">
                      ₺5.99
                    </p>
                    <p class="text-lg text-gray-900">/ {t("free")}</p>
                  </div>
                </div>
                <ul class="mb-8 space-y-2">
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("plan1")}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("plan2")}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("plan3")}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("ads")}</p>
                  </li>
                </ul>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-primary_color rounded shadow-xl"
                >
                  {t("buynow")}
                </button>
              </div>
              <div class="w-11/12 h-2 mx-auto bg-secondary_color rounded-b opacity-75" />
              <div class="w-10/12 h-2 mx-auto bg-secondary_color rounded-b opacity-50" />
              <div class="w-9/12 h-2 mx-auto bg-secondary_color rounded-b opacity-25" />
            </div>

            <div>
              <div class="p-8 bg-secondary_color rounded">
                <div class="mb-4 text-center">
                  <p class="text-xl font-medium tracking-wide text-black">
                    Premium Plan
                  </p>
                  <div class="flex items-center justify-center">
                    <p class="mr-2 text-5xl font-semibold text-black lg:text-6xl">
                      ₺39.99
                    </p>
                    <p class="text-lg text-gray-900">/ Ay</p>
                  </div>
                </div>
                <ul class="mb-8 space-y-2">
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("plan5")}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("plan2")}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("plan3")}</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-black">{t("noads")}</p>
                  </li>
                </ul>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-primary_color rounded shadow-xl"
                >
                  {t("buynow")}
                </button>
              </div>
              <div class="w-11/12 h-2 mx-auto bg-secondary_color rounded-b opacity-75" />
              <div class="w-10/12 h-2 mx-auto bg-secondary_color rounded-b opacity-50" />
              <div class="w-9/12 h-2 mx-auto bg-secondary_color rounded-b opacity-25" />
            </div>
          </div>
        </div>
      </div>

      {/* HomePage Component 5  */}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 tertiary-font text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {t("hpComponent5")}
          </h2>
          <p className="text-base md:text-lg">{t("hpComponent51")}</p>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Footer  */}
    </div>
  );
};

export default withTranslation()(HomePage);
