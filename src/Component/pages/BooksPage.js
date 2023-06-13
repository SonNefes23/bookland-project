import React from "react";
import Ads from "../../img/Ads2.jpg";
import Person from "../../img/person.jpeg";
import { BsTwitter } from "react-icons/bs";
import BooksProduct from "./BooksProduct";

function BooksPage() {
  return (
    <div>
      <div className="mx-auto px-4 py-8   sm:max-w-xl md:max-w-xl lg:max-w-screen-xl md:px-6 lg:px-24 ">
        <div class="grid gap-8 grid-cols-1 lg:grid-cols-4  grid-flow-row">
          <div class=" text-center  col-start-1 col-end-4  ">
            <div className="bg-[url('/src/img/image.png')] h-[15rem] md:[18rem]  lg:h-[21rem] bg-cover rounded-3xl pl-12 flex justify-start items-center">
              <div className="flex flex-col  justify-center filter-none secondary-font md:p-8 ">
                <div>
                  <h1 className="text-white secondary-font font-normal lg:text-3xl sm:text-xl">
                    Kitaplarla dolu bir dünyada <br />
                    istediğiniz şekilde gezinin....
                  </h1>{" "}
                  <p className="text-gray-500  font-normal text-sm lg:text-xl text-left">
                    -Bookland
                  </p>{" "}
                </div>
                <a
                  className="p-2  mt-2 lg:mt-4 w-1/2 lg:w-1/3 bg-secondary_color flex-1 rounded-full text-white font-normal lg:text-sm text-xs"
                  href="/"
                >
                  Haydi Başla!
                </a>
              </div>
            </div>
          </div>
          <div class=" text-center  grid-cols-1 hidden lg:inline-flex ">
            <div className="flex flex-col ">
              <a href="https://www.tesbihane.com/tesbih">
                <img
                  src={Ads}
                  alt=""
                  className="h-[17rem] w-full rounded-3xl shadow-2xl "
                />
              </a>

              <div class="flex flex-shrink-0  ">
                <div class="flex-1 ">
                  <div class="flex items-center w-48">
                    <div>
                      <img
                        class="inline-block h-12 rounded-full  mt-2"
                        src={Person}
                        alt=""
                      />
                    </div>
                    <div class=" ml-3 mt-3">
                      <div class="text-base leading-6 font-medium">
                        <p className="flex justify-center items-center">
                          <p>Bookland</p>
                          <BsTwitter className="ml-2 text-[#1d9bf0]" />
                        </p>
                      </div>
                      <p class="text-xs leading-3 font-light  ">@bookland</p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end items-end">
                  <a href="/" class=" float-right">
                    <button className="text-xs text-[#1d9bf0] font-medium">
                      Takip Et
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BooksProduct />
    </div>
  );
}

export default BooksPage;
