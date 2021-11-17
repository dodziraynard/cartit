import { ADD_ITEM_TO_CART, UPDATE_ITEM_QUANTITY } from "../actions/types";

const initialState = {
  totalPrice: 0.0,
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

function calculateTotal(items) {
  let total = 0;
  items.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const newState = {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, id: state.cartItems.length + 1 },
        ],
      };
      return {
        ...newState,
        totalPrice: calculateTotal(newState.cartItems),
      };

    case UPDATE_ITEM_QUANTITY:
      const id = action.payload.id;
      const quantity = action.payload.quantity;
      if (quantity < 1)
        // Remove Item from cart and update total price.
        return {
          ...state,
          cartItems: [...state.cartItems.filter((item) => item.id != id)],
          totalPrice: calculateTotal(
            state.cartItems.filter((item) => item.id != id)
          ),
        };

      // Update item's quantity and update total price.
      state.cartItems.forEach((item) => {
        if (item.id === id) item.quantity = quantity;
      });

      return {
        ...state,
        cartItems: [...state.cartItems],
        totalPrice: calculateTotal(state.cartItems),
      };
    default:
      return state;
  }
}
