import React from "react";
import "../css/home.css";
import { GiCoffeeCup } from "react-icons/gi";
import { SiCodefresh } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";

function Home() {
  return (
    <div className="homeContainer">
      <div className="home">
      <div className="containerPhoto">
        <img className="firstPhoto" src="../../src/images/coffee.jpg" alt="" />
        <img
          className="secondPhoto"
          src="../../src/images/coffeMan.jpg"
          alt=""
        />
      </div>
      <div className="homeText">
        <h3 className="homeText1">THE COFFEE CO.</h3>
        <h1 className="homeText2">About Us</h1>
        <p className="homeText3">At The Coffee Co., we are driven by a passion for exceptional coffee and a commitment to quality. With our "Stay Adventurous" philosophy, we aim to create a bridge between nature and our guests, offering a unique escape from daily routines. Our carefully crafted blends, sourced from the finest beans, bring bold flavors and rich aromas to every cup. Whether you're starting your day with a strong espresso or unwinding with a smooth latte, WildBrew is here to fuel your journey. Experience the wild side of coffee with us!</p>
      </div>
      </div>
      <div className="propertiesContainer">
        <div className="prop">
        <GiCoffeeCup style={{ fontSize: "30px", color: "#986b54"}} />
        <h2>Hot Coffee</h2>
        <p>You can take coffee pretty hot. You can be sure that.</p>
        </div>
        <div className="prop">
        <SiCodefresh style={{ fontSize: "30px", color: "rgb(47, 210, 47)"}} />
        <h2>Fresh Coffee Beans</h2>
        <p>All our products are made from fresh coffee beans.</p>
        </div>
        <div className="prop">
        <AiOutlineSafety style={{ fontSize: "30px", color: "green"}} />
        <h2>Secure Payment</h2>
        <p>You can make your payment securely. You can be sure that.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
