import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../stylesheets/shoe.scss";
import { shopContext } from "../contexts/shopContext";
import { Link } from 'react-router-dom';

const Shoe = ({ item }) => {
  const [label, setLabel] = useState(false);
  const { state, dispatch } = useContext(shopContext);
  const { name, price, src } = item;
  const nameArr = state.cart_list.map((shoe) => shoe.name);

  useEffect(() => {
    if (nameArr.includes(name)) {
      setLabel(true);
    }
  }, [name, nameArr]);

  const clickHandler = (e) => {
    if (e.target.textContent === "Add to Cart") {
      setLabel(!label);
      dispatch({
        type: "Add To Cart",
        payload: {
          price: parseFloat(e.target.dataset.price),
          name: e.target.dataset.name,
          src: e.target.dataset.src,
        },
      });
    } else {
      setLabel(!label);
      dispatch({
        type: "Remove From Cart",
        payload: {
          price: parseFloat(e.target.dataset.price),
          name: e.target.dataset.name,
        },
      });
    }
  };

  return (
    <div className="shoe-wrapper">
      <Typography variant="h5" align="center">
        {name}
      </Typography>
      <Link to={`/cart/${name}`} state={{ item }}>
        <div className="shoe-image">
          <Typography variant="h5">$ {price.slice(1)}</Typography>
          <img src={src} alt={name} />
        </div>
      </Link>
      <Button
        variant="contained"
        onClick={(e) => clickHandler(e)}
        data-price={price.slice(1)}
        data-name={name}
        data-src={src}
        color={label ? "secondary" : "primary"}
      >
        {label ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div >
  );
};

export default Shoe;
