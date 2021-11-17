import { GET_ITEMS, ADD_ITEM_TO_CART } from "../actions/types";

const initialState = {
  cartItems: [
    // {
    //   id: 1,
    //   product: {},
    //   quantity: 1,
    //   color: null,
    //   size: null,
    // },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
}
