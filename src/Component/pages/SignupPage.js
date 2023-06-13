import React from 'react'

function SignupPage() {
  return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 secondary-font">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary_color sm:text-4xl sm:leading-none">
                Keşfetmeye <br className="hidden md:block" />
                Son Bir Kaç{' '}
                <span className="text-teal-accent-400">Adım</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-700 md:text-lg">
              Bilim kurgu ve fantastik evrenlerde yolculuk yapmak, uzak diyarlarda maceralara atılmak isterseniz, 
              sizi keşif dolu bir serüven bekliyor. Tarihin tozlu sayfalarında gezinmek ve geçmişe tanıklık etmek için de yolculuğa çıkabilirsiniz.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Kayıt Ol
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Adınız
                    </label>
                    <input
                      placeholder="Ahmet"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Soy Adınız
                    </label>
                    <input
                      placeholder="Demir"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="amtdmr12@gmail.com"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Şifre
                    </label>
                    <input
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <p className="text-xs text-primary_color sm:text-sm">
                  <a href="/giris">Zaten Hesabım Var !</a>
                  </p>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-primary_color transition duration-200 rounded shadow-md bg-secondary_color  focus:shadow-outline focus:outline-none"
                    >
                      Kayıt Ol
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                  "Kitaplar, ruha ilham veren sihirli yolculuklar." <br /> <p className='font-bold'>- Ahmet Ümit</p>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


  )
}

export default SignupPage