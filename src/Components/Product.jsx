import React from "react";
import "../css/product.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const {
    id,
    title,
    price,
    image,
    rating: { rate },
  } = product;
  const navigate = useNavigate();
  return (
    <div className="productCard">
      <p className="title">{title}</p>
      <img className="productImage" src={image} alt="" />
      <div className="priceCard">
        <p className="price">Price: ${price}</p>
        <div className="rateDiv">
          <FaStar style={{ color: "#FFB200" }} />
          <p className="rate">{rate} / 5.0</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(`/menu/product-details/${id}`);
          window.scrollTo(0, 0);
        }}
        className="detailsBtn"
      >
        More Details
      </button>
    </div>
  );
}

export default Product;
