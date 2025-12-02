import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import {default as Signup} from "./landing_page/signup/Signup"
import SupportPage from "./landing_page/support/Supportpage";
import Aboutpage from "./landing_page/about/Aboutpage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import Productpage from "./landing_page/products/ProductPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import "react-toastify/dist/ReactToastify.css";
import {default as Login} from "./landing_page/login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*"  element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
