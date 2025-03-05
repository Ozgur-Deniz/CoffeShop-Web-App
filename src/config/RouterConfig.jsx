import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import ProductDetails from "../Components/ProductDetails";
import Basket from "../Components/Basket";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/product-details/:id" element={<ProductDetails />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/addComment" element={<Contact />} />
    </Routes>
  );
}

export default RouterConfig;
