import React, { useEffect, useState } from "react";
import "../css/basket.css";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmount,
  addToBasket,
  removeProduct,
  removeBasket,
} from "../redux/slices/basketSlice";
import { Toaster, toast } from "sonner";

function Basket() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAmount());
  }, [dispatch]);

  const { products, totalAmount } = useSelector((store) => store.basket);
  const location = true;
  const finishOrder = () => {
    if (totalAmount > 0) {
      dispatch(removeBasket());
      alert(
        "Your order has been created. You will receive your order as soon as possible."
      );
    }
    else {
      alert("Your order could not be completed because your cart is empty.");
    }
  };

  return (
    <div className="basketContainer">
      <div className="orderContainer">
        {products
          .slice()
          .sort((a, b) => a.id - b.id)
          .map((product) => {
            const { id, title, price, image, count } = product;
            const singleAmount = parseFloat((count * price).toFixed(2));

            const increaseCount = () => {
              dispatch(
                addToBasket({
                  id,
                  title,
                  price,
                  image,
                  count: count + 1,
                  location,
                })
              );
              dispatch(getAmount());
            };

            const decreaseCount = () => {
              if (count > 1) {
                dispatch(
                  addToBasket({
                    id,
                    title,
                    price,
                    image,
                    count: count - 1,
                    location,
                  })
                );
                dispatch(getAmount());
              }
            };
            const removeFunc = () => {
              const payload = { id };
              dispatch(removeProduct(payload));
              dispatch(getAmount());
              toast.success("Product was successfully removed!", {
                position: "top-right",
                duration: 3000,
                icon: (
                  <FaCheckCircle
                    style={{ fontSize: "25px", color: "#03e400" }}
                  />
                ),
                style: {
                  padding: "20px",
                  fontSize: "15px",
                },
              });
            };

            return (
              <div key={id} className="productInBasketContainer">
                <img className="imgProductInBasket" src={image} alt="" />
                <div className="propBasket">
                  <p className="sameProductName">{title}</p>
                  <div className="btnsInBasketContainer">
                    <div className="amountContainerAtBasket">
                      <button
                        className="minusBtnBasket"
                        onClick={decreaseCount}
                      >
                        -
                      </button>
                      <p className="amountValueBasket">{count}</p>
                      <button className="plusBtnBasket" onClick={increaseCount}>
                        +
                      </button>
                    </div>
                    <button onClick={removeFunc} className="removeBtn">
                      REMOVE
                    </button>
                    <Toaster />
                  </div>
                </div>
                <h1 className="totalSameProductAmount">${singleAmount}</h1>
              </div>
            );
          })}
      </div>
      <h1 className="cardContent">CART CONTENT</h1>
      <div className="orderSummaryContainer">
        <h1>Order Summary</h1>
        <div className="summaryProp">
          <div className="summaryPropIn">
            <p>Price</p>
            <p>${totalAmount}</p>
          </div>
          <div className="summaryPropIn">
            <p>Discount</p>
            <p>$0</p>
          </div>
          <div className="summaryPropIn">
            <p>Shipping</p>
            <p className="free">FREE</p>
          </div>
        </div>
        <div className="totalAmountDiv">
          <p>TOTAL</p>
          <p className="totalAmount">${totalAmount}</p>
        </div>
        <button onClick={finishOrder} className="checkoutBtn">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Basket;
