import { GET_PRODUCTS } from "../actions/types";
import { GET_MATCHED_PRODUCTS } from "../actions/types";
import { SET_QUERY } from "../actions/types";

const initialState = {
  query: "",
  queryMatchedProducts: [],
  products: [
    {
      id: 1,
      cat_id: 1,
      name: "Nike Air Max 320",
      description: "Descriptions 1",
      summary: "summary",
      info: "7 colors",
      views: 4,
      image: "",
      price: 150.99,
      colors: ["red-url", "green-url"],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 5,
      cat_id: 2,
      name: "Gucci Max Air 230",
      description: "Lorem ipsum",
      summary: "summary",
      info: "7 colors",
      views: 4,
      image: "",
      price: 150.99,
      colors: ["red-url", "green-url"],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 2,
      cat_id: 3,
      name: "Gents",
      description: "Descriptions lorem",
      summary: "summary",
      info: "7 colors",
      views: 4,
      image: "",
      price: 150.99,
      colors: ["red-url", "green-url"],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 3,
      cat_id: 1,
      name: "Ladies",
      description: "Descriptions",
      summary: "summary",
      info: "7 colors",
      views: 4,
      image: "",
      price: 150.99,
      colors: ["red-url", "green-url"],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 4,
      cat_id: 1,
      name: "Men",
      description: "Descriptions",
      summary: "summary",
      info: "7 colors",
      views: 4,
      image: "",
      price: 150.99,
      colors: ["red-url", "green-url"],
      sizes: [39, 40, 41, 42],
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        queryMatchedProducts: [
          ...state.products.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        ],
      };
    default:
      return state;
  }
}
