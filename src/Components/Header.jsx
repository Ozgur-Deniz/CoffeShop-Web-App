import React from "react";
import "../css/header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setDrawer } from "../redux/slices/wishSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="headerContainer">
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img className="logo" src="/images/coffee-beans.png" alt="" />
        <h1 className="logoText">
          TheCoffee<sup>©</sup>
        </h1>
      </div>
      <div className="pages">
        <p
          className="page"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </p>
        <p
          className="page"
          onClick={() => {
            navigate("/menu");
            window.scrollTo(0, 0);
          }}
        >
          MENU
        </p>
        <p
          className="page"
          onClick={() => {
            navigate("/aboutUs");
            window.scrollTo(0, 0);
          }}
        >
          ABOUT US
        </p>
        <p
          className="page"
          onClick={() => {
            navigate("/addComment");
            window.scrollTo(0, 40);
          }}
        >
          ADD COMMENT
        </p>
      </div>
      <div className="basketDiv">
        <Tippy
          content="Go to the WishList."
          className="custom-tooltip"
          arrow={false}
        >
          <span>
            <FaRegHeart
              onClick={() => dispatch(setDrawer())}
              className="wishList"
            />
          </span>
        </Tippy>
        <div className="divider"></div>
        <Tippy
          content="Go to the Basket."
          className="custom-tooltip"
          arrow={false}
        >
          <span>
            <LuShoppingCart
              onClick={() => {
                navigate("/basket");
                window.scrollTo(0, 0);
              }}
              className="basket"
            />
          </span>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
