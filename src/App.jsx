import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import WishList from "./Components/WishList";
import Footer from "./Components/Footer";
import RouterConfig from "./config/RouterConfig";
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const validPaths = ['/', '/aboutUs'];
  const getBacgroundClass = () => {
    if (validPaths[0].includes(location.pathname)) return 'mainHomeResponsive';
    if (validPaths[1].includes(location.pathname)) return 'mainHome';
    else return 'mainDefault';
  }
  return (
    <div>
      <Header />
      <div className={`main ${ getBacgroundClass() }`}>
        <RouterConfig />
      </div>
      <WishList />
      <Footer />
    </div>
  );
}

export default App;
