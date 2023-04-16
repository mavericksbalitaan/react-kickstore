import React from "react";
import Shoe from "./Shoe";
import '../stylesheets/shoes.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Shoes = ({ inventory }) => {
  return (
    <>
      <div className="shoes-wrapper">
        {inventory.length &&
          inventory.map((item, idx) => {
            return <Shoe key={idx} item={item} />;
          })}
      </div>
      <div className="home-btn">
        <Link to="/cart">
          <Button variant="outlined">CHECKOUT</Button>
        </Link>
      </div>
    </>
  );
};

export default Shoes;
