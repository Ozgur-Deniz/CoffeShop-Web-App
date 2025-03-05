import React, { useEffect, useState } from "react";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/productDetails.css";
import { FaRegHeart, FaCheckCircle } from "react-icons/fa";
import { FaHeart, FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { addToBasket } from "../redux/slices/basketSlice";
import { addToWish, changeEnable } from "../redux/slices/wishSlice";
import { Toaster, toast } from "sonner";
import Comments from "./Comments";
import { motion, AnimatePresence } from "framer-motion";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { wishProducts } = useSelector((store) => store.wish);
  const [wishEnable, setWishEnable] = useState(false);
  const [commentBtnText, setCommentBtnText] = useState("SHOW COMMENTS");
  const [commentState, setCommentState] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id == id);
    if (foundProduct) {
      dispatch(setSelectedProduct(foundProduct));
    }
    const wishProduct = wishProducts.find((product) => product.id === id);
    setWishEnable(wishProduct?.enable || false);
  }, [id, products, wishProducts, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { title, price, description, image, rating, enable } =
    selectedProduct || {};

  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addBasket = () => {
    if (count > 0) {
      const payload = { id, title, price, description, image, rating, count };
      dispatch(addToBasket(payload));
      toast.success("Product added successfully!", {
        duration: 3000,
        icon: <FaCheckCircle style={{ fontSize: "25px", color: "#03e400" }} />,
        style: {
          padding: "20px",
          fontSize: "15px",
        },
      });
    }
  };

  const addWish = () => {
    const payload = {
      id,
      title,
      price,
      description,
      image,
      rating,
      count,
      enable,
    };
    dispatch(addToWish(payload));
    dispatch(changeEnable(payload));
  };
  const handleCommentBtn = () => {
    setCommentBtnText((prev) =>
      prev === "SHOW COMMENTS" ? "HIDE COMMENTS" : "SHOW COMMENTS"
    );
    setCommentState((prev) => !prev);
  };

  return (
    <div className="detailsPageGeneralContainer">
      <div className="detailsPageContainer">
        <div className="detailsContainer">
          <div className="backMenu">
            <FaArrowLeftLong
              className="backIcon"
              onClick={() => navigate("/menu")}
            />
            <h3>
              <span className="backSpan">Menu</span>/{title}
            </h3>
          </div>
          <div className="titleContainer">
            <h1 className="titleDetail">{title}</h1>
            {wishEnable ? (
              <FaHeart onClick={addWish} className="wishIcon wishIconTrue" />
            ) : (
              <FaRegHeart
                onClick={addWish}
                className="wishIcon wishIconFalse"
              />
            )}
          </div>
          <div className="priceContainer">
            <p className="priceDetailPage">${price}</p>
            <div className="rateContainer">
              <FaStar className="starIcon" />
              <p>{rating?.rate || 0}/5</p>
            </div>
          </div>
          <p className="description">{description}</p>
          <div className="buttonContainer">
            <div className="amountContainer">
              <button className="minusBtn" onClick={decreaseCount}>
                -
              </button>
              <p className="amountValue">{count}</p>
              <button className="plusBtn" onClick={increaseCount}>
                +
              </button>
            </div>
            <button onClick={addBasket} className="addBtn">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="photoContainer">
          <img className="photoDetail" src={image} alt="" />
        </div>
        <Toaster position="top-right" />
      </div>
      <button onClick={handleCommentBtn} className="showAllBtn">
        {commentBtnText}
      </button>
      <AnimatePresence>
        {commentState && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="commentsContainer"
          >
            <Comments />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductDetails;
