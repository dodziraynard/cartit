import { GET_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [
    { id: 1, name: "New Arrivals", image: "" },
    { id: 2, name: "Gents", image: "" },
    { id: 3, name: "Ladies", image: "" },
    { id: 4, name: "Men", image: "" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
