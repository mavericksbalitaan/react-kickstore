const reducer = (state, action) => {
  switch (action.type) {
    case "Add To Cart":
      return {
        ...state,
        total_price: state.total_price + action.payload.price,
        cart_list: [...state.cart_list, { name: action.payload.name, src: action.payload.src, price: action.payload.price }],
      };
    case "Remove From Cart":
      return {
        ...state,
        total_price: state.total_price - action.payload.price,
        cart_list: [
          ...state.cart_list.filter((shoe) => shoe.name !== action.payload.name),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
