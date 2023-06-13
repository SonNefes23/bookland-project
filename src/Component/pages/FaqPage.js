import React from 'react'
import { useState } from 'react';


const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-[10px] lg:text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

function FaqPage() {
  return (
    
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 secondary-font ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 class="max-w-lg mb-6 font-sans text-2xl font-medium leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                        </span>
                        Sıkça Sorulan Sorular
                    </h2>
                    
                </div>
                <div class="space-y-4">
                    <Item title="Booklands'a nasıl üye olabilirim ?">
                    Booklands'a üye olmak için ana sayfamızdaki "Üye Ol" butonuna tıklayarak kayıt formunu doldurmanız yeterlidir. 
                    Adınızı, e-posta adresinizi ve tercih ettiğiniz bir kullanıcı adı ve şifre belirlemeniz gerekmektedir.
                    </Item>
                    <Item title="Üyelik planlarınız nelerdir ?">
                    Booklands, çeşitli üyelik planları sunmaktadır. 
                    Bu planlar farklı fiyatlandırma ve özelliklere sahiptir. 
                    Kullanıcılarımız, temel, standart veya premium planlar arasından seçim yapabilir ve buna göre aboneliklerini oluşturabilirler.
                    </Item>
                    <Item title="Kitapları nasıl okuyabilirim veya dinleyebilirim ?">
                    Booklands, kitapları iki farklı şekilde sunmaktadır. Kitapları isterseniz dijital olarak okuyabilir veya sesli kitap olarak dinleyebilirsiniz. 
                    Hesabınıza giriş yaptıktan sonra, istediğiniz kitabı seçip "Oku" veya "Dinle" seçeneğine tıklayarak ilgili içeriği kullanabilirsiniz.
                    </Item>
                    <Item title="Üyelik ücretlerimizi nasıl ödeyebilirim ?">
                    Üyelik ücretlerinizi kredi kartı veya diğer güvenli ödeme yöntemleri aracılığıyla 
                    ödeyebilirsiniz. Ödeme işlemi, kayıt sırasında belirlediğiniz tercihlere göre otomatik olarak gerçekleştirilecektir.
                    </Item>
                    <Item title="Üyeliğimi nasıl iptal edebilirim ?">
                    Üyeliğinizi iptal etmek için hesabınıza giriş yaparak "Profil" bölümüne giderek 
                    "Üyeliği İptal Et" seçeneğini kullanabilirsiniz. İptal işleminizi tamamlamadan önce ilgili politikaları ve süreçleri dikkatlice okumanızı öneririz.
                    </Item>
                </div>
            </div>
        </div>


  )
}

export default FaqPage