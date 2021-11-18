import { GET_PRODUCTS } from "../actions/types";
import { SET_QUERY } from "../actions/types";

const initialState = {
  query: "",
  queryMatchedProducts: [],
  products: [
    {
      id: 1,
      cat_id: 1,
      name: "Nike Air Max 320",
      description:
        "The first basketball sneaker to utilise Nike Air technology, the Air Force 1 is presented here in a Triple White colourway. This gives the lightweight shoe a crisp feel that will complete any look in style. You'll reach for this pair day after day.",
      summary: "The first basketball sneaker",
      info: "3 colors",
      views: 4,
      image:
        "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000208653046_07_rz.jpg",
      price: 150.99,
      colors: [
        "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000208653046_07_rz.jpg",
        "https://cdn-distance.pl/media/catalog/product/cache/07f4dbefc5ed4df4ee2ce08604f55f57/n/i/nike_air_max_270_react_ww_ck6457001_6_.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/v5wpodhvcphwusdubuiy/air-max-270-react-shoe-GCcKSq.png",
      ],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 5,
      cat_id: 1,
      name: "Nike Air Sole",
      description:
        "The first basketball sneaker to utilise Nike Air technology, the Air Force 1 is presented here in a Triple White colourway. This gives the lightweight shoe a crisp feel that will complete any look in style. You'll reach for this pair day after day.",
      summary: "The first basketball sneaker",
      info: "2 color",
      views: 4,
      image:
        "https://cdn-images.farfetch-contents.com/12/16/12/07/12161207_10320020_1000.jpg",
      price: 249.99,
      colors: [
        "https://cdn-images.farfetch-contents.com/16/35/26/08/16352608_31378638_1000.jpg",
        "https://cdn-images.farfetch-contents.com/12/16/12/07/12161207_10320020_1000.jpg",
      ],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 2,
      cat_id: 1,
      name: "Nike Air Max 170",
      description:
        "NIKE AH8050100 White black white Leather/Polyester/Polyamide/rubber",
      summary: "Air Max 270 sneakers",
      info: "1 colors",
      views: 4,
      image:
        "https://cdn-images.farfetch-contents.com/12/82/61/38/12826138_12897256_1000.jpg",
      price: 199.99,
      colors: [
        "https://cdn-images.farfetch-contents.com/12/82/61/38/12826138_12897256_1000.jpg",
      ],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 3,
      cat_id: 1,
      name: "Air Force 270",
      description:
        "Supplied by a premier sneaker marketplace dealing with unworn, already sold out, in demand rarities. Each product is rigorously inspected by experienced experts guaranteeing authenticity. The Nike Air Force 270 is a basketball sneaker that salutes the 1992 Olympic Dream Team and the Air Force 180 that Charles Barkley wore during the Barcelona Games. The colourway has a mix of navy, red, and metallic gold. Marrying the two styles together, this Nike Air Force 270 sports a version of the Air Force 180 upper and the lifestyle-engineered Air unit of the original Air Max 270.",
      summary: "summary",
      info: "1 color",
      views: 4,
      image:
        "https://cdn-images.farfetch-contents.com/13/67/83/65/13678365_21609900_1000.jpg",
      price: 279.99,
      colors: [
        "https://cdn-images.farfetch-contents.com/13/67/83/65/13678365_21609901_1000.jpg",
        "https://cdn-images.farfetch-contents.com/14/63/63/63/14636363_22853220_1000.jpg",
      ],
      sizes: [39, 40, 41, 42],
    },
    {
      id: 4,
      cat_id: 1,
      name: "Nike Adapt BB",
      description:
        "Supplied by a premier sneaker marketplace dealing with unworn, already sold out, in demand rarities. Each product is rigorously inspected by experienced experts guaranteeing authenticity. The Nike Adapt BB “Mag” is a special edition of the power-lacing Nike Basketball shoe inspired by the legendary Nike Mag. Nike’s first power-lacing shoe for basketball appropriately receives this colourway taken from the once fictional, now real sneaker from “Back to the Future Part 2.”",
      summary: "Just do it.",
      info: "7 colors",
      views: 4,
      image:
        "https://cdn-images.farfetch-contents.com/14/15/78/56/14157856_21070415_1000.jpg",
      price: 150.99,
      colors: [
        "https://cdn-images.farfetch-contents.com/14/15/78/56/14157856_21070415_1000.jpg",
        "https://cdn-images.farfetch-contents.com/16/63/61/54/16636154_32530354_1000.jpg",
      ],
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
