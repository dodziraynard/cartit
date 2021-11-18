const initialState = {
  banners: [
    {
      id: 1,
      name: "New Arrivals",
      image: "https://cdn-icons-png.flaticon.com/512/2037/2037558.png",
    },

    {
      id: 2,
      name: "New Year",
      image: "https://www.freeiconspng.com/download/34665",
    },
    {
      id: 3,
      name: "Hot",
      image: "https://www.freeiconspng.com/download/6044",
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
