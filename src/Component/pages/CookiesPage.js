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
                <p className="text-lg font-medium">{title}</p>
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

function CookiesPage() {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 secondary-font ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 class="max-w-lg mb-6 font-sans text-2xl font-medium leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <span class="relative">Çerezler</span>
                        </span>{' '}
                        Hakkında Bilgilendirme
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg ">
                        Booklands olarak, web sitemizi ve hizmetlerimizi geliştirmek ve size daha iyi bir deneyim sunmak amacıyla çerezler kullanmaktayız.
                        Bu sayfada çerezlerin ne olduğu, nasıl kullandığımız ve çerezlerin kontrolünü nasıl sağlayabileceğiniz hakkında bilgilendirme bulabilirsiniz.
                    </p>
                </div>
                <div class="space-y-4">
                    <Item title="Çerez Nedir">
                        Çerezler, internet siteleri tarafından cihazınıza yerleştirilen küçük metin dosyalarıdır.
                        Bu dosyalar, tarayıcınız tarafından saklanır ve bir sonraki ziyaretinizde web sitesine bilgi sağlamak için kullanılır.
                        Çerezler, sizin tercihlerinizi hatırlamamız, siteyi analiz etmemiz ve hizmetlerimizi kişiselleştirmemiz için kullanılmaktadır.
                    </Item>
                    <Item title="Çerezleri İşlenmesi">
                        Booklands olarak, çerezleri aşağıdaki amaçlarla kullanmaktayız: <br /><br />
                        1. Site İşlevselliği: Bazı çerezler, web sitemizin düzgün çalışmasını sağlamak için gereklidir. Bu çerezler olmadan, örneğin oturum açma bilgilerinizin hatırlanması gibi bazı temel fonksiyonlar çalışmayabilir.
                        <br /><br />
                        2. Performans ve Analiz: Bazı çerezler, web sitemizin performansını ve kullanıcı deneyimini geliştirmek için kullanılır. Bu çerezler, site trafiğini analiz etmemize, popüler sayfaları belirlememize ve kullanıcı davranışını anlamamıza yardımcı olur.
                        <br /><br />
                        3. Kişiselleştirme: Bazı çerezler, sizin tercihlerinizi hatırlamamızı ve hizmetlerimizi size özel olarak sunmamızı sağlar. Örneğin, tercih ettiğiniz dil veya teması hatırlayabiliriz.
                    </Item>
                    <Item title="Çerezlerin Kontrolü">
                    Çerezleri kontrol etmek ve yönetmek için tarayıcınızın ayarlarını kullanabilirsiniz. 
                    Genellikle tarayıcınızın ayarlarından çerezleri kabul etmeyi reddetme, 
                    çerezleri silme veya çerezleri otomatik olarak engelleme gibi seçeneklere erişebilirsiniz. 
                    Ancak, unutmayın ki çerezleri devre dışı bırakmanız durumunda bazı web sitelerinin düzgün 
                    çalışmayabileceğini veya belirli özelliklerin kullanılamayabileceğini göz önünde bulundurun.
                    </Item>
                    <Item title="Gizlilik Politikası">
                    Çerezler hakkında daha detaylı bilgi için lütfen gizlilik politikamızı inceleyin. 
                    Gizlilik politikamızda, kişisel verilerinizin nasıl kullanıldığı ve korunduğu hakkında ayrıntılı bilgiler bulunmaktadır.
                    </Item>
                </div>
            </div>
        </div>
    )
}

export default CookiesPage