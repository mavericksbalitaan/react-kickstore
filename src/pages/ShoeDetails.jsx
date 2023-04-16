/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Typography, Button } from '@mui/material';
import '../stylesheets/shoedetails.scss';
import { shopContext } from "../contexts/shopContext";

const ShoeDetails = () => {
  const location = useLocation();
  const { name, price, src, desc } = location.state.item;
  const [label, setLabel] = useState(false);
  const { state, dispatch } = useContext(shopContext);

  useEffect(() => {
    if (state.cart_list) {
      state.cart_list.filter(shoe => {
        if (shoe.name === name) {
          setLabel(!label);
        }
        return shoe;
      })
    }
  }, []);

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
    <>
      <div className='shoedetails__container'>
        <div className="shoedetails__container--card">
          <div className='shoedetails__container--img'>
            <img src={src} alt={name} />
          </div>
          <div className='shoedetails__container--info'>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
            <Typography gutterBottom variant="body1" color="text.secondary">
              {desc}
            </Typography>
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

          </div>
        </div>
      </div >
      <div className="home-btn">
        <Link to="/">
          <Button variant="outlined">Keep Shopping</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outlined">Check Cart</Button>
        </Link>

      </div>
    </>
  )
}

export default ShoeDetails
