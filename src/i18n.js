import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      hpComponent: "Kitaplarla dolu bir dünyada dilediğiniz gibi gezinin...",
      hpComponent1:
        "Bookland, her türden okuyucunun aradığı kitapları bulabileceği sınırsız bir dünya sunuyor. En sevdiğiniz yazarların en iyi eserlerine buradan ulaşabilirsiniz.",
      hpComponent2:
        "Bookland, her türden okuyucunun aradığı kitapları bulabileceği sınırsız bir dünya sunuyor. En sevdiğiniz yazarların en iyi eserlerine buradan ulaşabilirsiniz.",
      hpComponentbutton: "Öğrenci indirimi ile üye ol!",
      hpComponent3: "Şu Anda Popüler",
      hpComponent4: "Abonelik Planını Seç",
      hpComponent41: "Bookland ’da senin için uygun abonelik planları var.",
      hpComponent412: "Premium abonelik ile reklamsız bir deneyim yaşa ve",
      hpComponent4123: "okuma/dinleme keyfini sınırsızca yaşa!",
      starterplan: "Başlangıç Paketi",
      free: "Ücretsiz",
      plan1: "1 Kullanıcı",
      plan5: "5 Kullanıcı",
      plan2: "Sınırsız Kitap",
      plan3: "Sınırsız Sesli Kitap",
      ads: "Reklamlı Sürüm",
      noads: "Reklamsız Sürüm",
      buynow: "Şimdi Satın Al",
      hpComponent5: "Bookland Dünyasında Sınır Yok",
      hpComponent51:
        "Bookland, okumayı sevenlerin keşfetmesi için uçsuz bucaksız bir dünya sunuyor. Binlerce kitap, yüzlerce yazar ve birçok türde içerik, sadece seni bekliyor. Eğlence, bilgi, hayal gücü, heyecan ve daha birçok şey, Bookland'da seni bekliyor. Haydi, bu muhteşem dünyayı keşfetmek için şimdi Bookland'a üye ol!",
    },
  },
  en: {
    translation: {
      hpComponent:
        "Navigate through a world brimming with books as you wish...",
      hpComponent1:
        "Bookland offers an unlimited world where readers of all kinds can find the books they are looking for. The best works of your favorite authors are available here.",
      hpComponent2:
        "Just being a wizard to explore, And being human to feel, Welcome to the world of Harry Potter!",
      hpComponentbutton: "Join with a student discount!",
      hpComponent3: "Popular Right Now",
      hpComponent4: "Choose a Subscription Plan",
      hpComponent41:
        "Bookland offers subscription plans that are suitable for you.",
      hpComponent412: "Experience an ad-free experience and",
      hpComponent4123:
        "enjoy unlimited reading/listening with a Premium subscription!",
      starterplan: "Starter Package",
      free: "Free",
      plan1: "1 User",
      plan5: "5 User",
      plan2: "Unlimited Books",
      plan3: "Unlimited Audiobooks",
      ads: "Reklam Destekli Sürüm",
      noads: "No Ads",
      buynow: "Buy Now",
      hpComponent5: "There are no limits in the world of Bookland.",
      hpComponent51:
        "Bookland offers an infinite world for those who love reading to explore. Thousands of books, hundreds of authors, and a wide range of genres are waiting just for you. Entertainment, knowledge, imagination, excitement, and much more await you in Bookland. Come on, join Bookland now to discover this magnificent world!",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "tr",
  resources,
});

export default i18n;
