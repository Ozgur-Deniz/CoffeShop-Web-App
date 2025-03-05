import React from "react";
import Gallery from "../Components/Gallery";
import "../css/aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutGeneralContainer">
      <h1 className="theBest">THE BEST COFFEE </h1>
      <div className="aboutContainer">
        <div className="galleryContainer">
          <Gallery />
        </div>
        <div className="homeText">
          <h3 className="homeText1">THE COFFEE CO.</h3>
          <h1 className="homeText2">About Us</h1>
          <p className="homeText3">
            At The Coffee Co., we are driven by a passion for exceptional coffee
            and a commitment to quality. With our "Stay Adventurous" philosophy,
            we aim to create a bridge between nature and our guests, offering a
            unique escape from daily routines. Our carefully crafted blends,
            sourced from the finest beans, bring bold flavors and rich aromas to
            every cup. Whether you're starting your day with a strong espresso
            or unwinding with a smooth latte, WildBrew is here to fuel your
            journey. Experience the wild side of coffee with us!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
