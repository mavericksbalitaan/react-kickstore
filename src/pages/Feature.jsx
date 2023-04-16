import React, { useContext } from "react";
import "../stylesheets/feature.scss";
import feat from "../assets/images/maroon-black-gold-kyrie-max.png";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Widgets, Search, ShoppingCart, AccountCircle } from "@mui/icons-material";
import { shopContext } from "../contexts/shopContext";
import Storefront from "../components/Storefront";

const Feature = () => {
  const { state } = useContext(shopContext);
  return (
    <>
      <div className="feature-wrapper">
        <nav>
          <Link to="/">
            <Widgets
              sx={{ color: "#fff", fontSize: "2rem", marginLeft: "1rem" }}
            />
          </Link>
          <ul>
            <li>
              <Link to="/">
                <Search sx={{ color: "#fff", fontSize: "2rem" }} />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <ShoppingCart sx={{ color: "#fff", fontSize: "2rem" }} />
              </Link>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Cart Total: $ {state.total_price.toFixed(2)
                }
              </Typography>
            </li>
            <li>
              <Link to="/">
                <AccountCircle sx={{ color: "#fff", fontSize: "2rem" }} />
              </Link>
            </li>

          </ul>
        </nav>
        <div className="feature-hero">
          <img src={feat} alt="Maroon Black Gold Kyrie Max" />
          <Typography variant="h1">
            HOT
            <br />
            KICKS
          </Typography>
        </div>
      </div>
      <Storefront />
    </>
  );
};

export default Feature;
