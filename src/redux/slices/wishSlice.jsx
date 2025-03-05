import { createSlice } from "@reduxjs/toolkit";

const getWishFromStorage = () => {
  if (localStorage.getItem("wish")) {
    return JSON.parse(localStorage.getItem("wish"));
  }
  return [];
};

const writeFromWishToStorage = (wish) => {
  localStorage.setItem("wish", JSON.stringify(wish));
};

const initialState = {
  wishProducts: getWishFromStorage(),
  drawer: false,
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    addToWish: (state, action) => {
      const findProduct =
        state.wishProducts &&
        state.wishProducts.find((product) => product.id === action.payload.id);
      if(findProduct) {
        const filteredProducts = state.wishProducts.filter((product) => product.id !== action.payload.id);
        state.wishProducts = filteredProducts;
        writeFromWishToStorage(state.wishProducts);
      }
      else {
        state.wishProducts = [...state.wishProducts, action.payload];
        writeFromWishToStorage(state.wishProducts);
      }  
    },
    removeProduct: (state, action) => {
      const filteredProducts = state.wishProducts.filter((product) => product.id !== action.payload.id);
        state.wishProducts = filteredProducts;
        writeFromWishToStorage(state.wishProducts);
    },
    changeEnable: (state, action) => {
      state.wishProducts = state.wishProducts.map(product =>
        product.id === action.payload.id
          ? { ...product, enable: !product.enable } 
          : product 
      );
      writeFromWishToStorage(state.wishProducts);
    }
  },
});

export const { setDrawer, addToWish, removeProduct, changeEnable } = wishSlice.actions;
export default wishSlice.reducer;
