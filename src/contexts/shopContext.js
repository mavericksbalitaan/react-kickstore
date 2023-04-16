import React, { createContext, useReducer } from "react";
import reducer from "../hooks/Reducer";

export const shopContext = createContext();

const initialState = {
  total_price: 0,
  cart_list: []
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch
  }

  return (
    <shopContext.Provider value={value}>
      {children}
    </shopContext.Provider>
  );
};

export default Provider;
