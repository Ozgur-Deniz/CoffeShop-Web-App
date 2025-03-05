import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  products: getBasketFromStorage(),
  totalAmount: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extractedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        if (action.payload.location) {
          findProduct.count = action.payload.count;
        } else {
          findProduct.count += action.payload.count;
        }
        state.products = [...extractedProducts, findProduct];
        writeFromBasketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
    getAmount: (state) => {
      state.totalAmount = 0;
      state.products &&
        state.products.map((product) => {
          state.totalAmount += parseFloat(
            (product.count * product.price).toFixed(2)
          );
        });
    },
    removeProduct: (state, action) => {
      const filteredProducts =
        state.products &&
        state.products.filter((product) => product.id !== action.payload.id);
        state.products = filteredProducts;
        writeFromBasketToStorage(state.products);
    },
    removeBasket: (state) => {
      state.products = [];
      state.totalAmount = 0;
      localStorage.removeItem("basket");
    }
  },
});

export const { addToBasket, getAmount, removeProduct, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;
