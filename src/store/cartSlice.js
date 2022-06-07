const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  carts: [],
  user: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      //Redux:
      //return [...state,action.payload]
      localStorage.setItem(
        "carts",
        JSON.stringify([...state.carts, action.payload])
      );
      state.carts = [...state.carts, action.payload];
    },

    remove(state, action) {
      if (localStorage.getItem("carts")) {
        const carts = JSON.parse(localStorage.getItem("carts"));
        const newCarts = carts.filter((item) => item.id !== action.payload);
        localStorage.setItem("carts", JSON.stringify(newCarts));
      }
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
      };
    },

    saveUser(state, action) {
      localStorage.setItem("userDetails", JSON.stringify(action.payload));

      return { ...state, user: action.payload };
    },

    loadCarts(state, action) {
      if (localStorage.getItem("carts") || localStorage.getItem("carts")) {
        const carts = JSON.parse(localStorage.getItem("carts"));
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        return { ...state, carts: carts, user: userDetails };
      }
      return state;
    },
  },
});

export const { add, remove, loadCarts, saveUser } = cartSlice.actions;

export default cartSlice.reducer;
