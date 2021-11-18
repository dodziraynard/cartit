import { combineReducers } from "redux";
import categories from "./categories";
import products from "./products";
import cartItems from "./cart_items";
import banners from "./banners";

export default combineReducers({
  categories,
  products,
  cartItems,
  banners,
});
