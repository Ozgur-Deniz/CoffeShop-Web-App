import React from "react";
import Drawer from "@mui/material/Drawer";
import { setDrawer, removeProduct } from "../redux/slices/wishSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/wishList.css";
import { FaStar } from "react-icons/fa6";

function WishList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { drawer, wishProducts } = useSelector((store) => store.wish);

  return (
    <div>
      <Drawer
        anchor="right"
        onClose={() => dispatch(setDrawer())}
        open={drawer}
        classes={{ paper: "drawerPaper" }} 
        PaperProps={{
          sx: {
            maxHeight: "100vh", 
            overflowY: "auto", 
            width:{ xs: "200", sm: "400px" }, 
            padding: "20px",
          },
        }}
      >
        <div className="wishListContainer">
          <h1 className="wishHeading">Wish List</h1>
          {wishProducts &&
            wishProducts.map((product) => {
              const { id, title, price, image, rating } = product;
              return (
                <div key={id} className="wishContainer">
                  <img className="imgAtWish" src={image} alt={title} />
                  <div className="wishDetails">
                    <p className="wishTitle">{title}</p>
                    <p className="wishPrice">${price}</p>
                    <div className="rateAtWish">
                      <p className="starRate">
                        <FaStar className="star" /> {rating?.rate || 0}
                      </p>
                    </div>
                  </div>
                  <div className="buttonsAtWish">
                    <button
                      onClick={() => {
                        dispatch(setDrawer());
                        navigate(`/menu/product-details/${id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="btnWish wishGoBtn"
                    >
                      Go Product
                    </button>
                    <button
                      onClick={() => dispatch(removeProduct({ id }))}
                      className="btnWish wishDeleteBtn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </Drawer>
    </div>
  );
}

export default WishList;
