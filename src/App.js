import React from "react";
import Navbar from "./Component/Navbar";
import BooksPage from "./Component/pages/BooksPage";
import BooklandAbout from "./Component/pages/BooklandAbout";
import Membershipconditions from "./Component/pages/Membershipconditions";
import CookiesPage from "./Component/pages/CookiesPage";
import NoPage from "./Component/pages/NoPage";
import Footer from "./Component/Footer";
import "./index.css";
import HomePage from "./Component/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./Component/pages/SignupPage";
import FaqPage from "./Component/pages/FaqPage";
import LoginPage from "./Component/pages/LoginPage";

/* Body etiketine class ekleme işlemi yapıldı */
document.body.classList.add(
  "scrollbar",
  "scrollbar-thumb-secondary_color",
  "scrollbar-track-gray-200",
  "scrollbar-thin"
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kitaplar" element={<BooksPage />} />

        {/*
        
        Footer Yönlendirmeleri

        */}
        <Route path="/bookland-hakkında" element={<BooklandAbout />} />
        <Route path="/uyelık-kosulları" element={<Membershipconditions />} />
        <Route path="/cerezler-hakkında" element={<CookiesPage />} />
        <Route path="/kayıt-ol" element={<SignupPage />} />
        <Route path="/sss" element={<FaqPage />} />
        <Route path="/giris" element={<LoginPage />} />

        {/*
        
        404 Page

        */}
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
