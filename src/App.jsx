import React from "react";
import "./app.scss";
import Provider from "./contexts/shopContext";
import Feature from './pages/Feature';
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoeDetails from "./pages/ShoeDetails";

const App = () => {

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feature />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:name" element={<ShoeDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
