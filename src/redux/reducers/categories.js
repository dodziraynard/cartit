import { GET_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [
    {
      id: 5,
      name: "Hot",
      image: "https://www.freeiconspng.com/download/6044",
    },
    {
      id: 1,
      name: "New Arrivals",
      image: "https://cdn-icons-png.flaticon.com/512/2037/2037558.png",
    },
    {
      id: 2,
      name: "Gents",
      image: "https://www.freeiconspng.com/download/2018",
    },
    {
      id: 3,
      name: "Ladies",
      image: "https://www.freeiconspng.com/download/7892",
    },
    {
      id: 4,
      name: "Kids",
      image: "https://www.freeiconspng.com/download/2124",
    },
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
