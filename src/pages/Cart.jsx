import React, { useContext } from "react";
import { shopContext } from "../contexts/shopContext";
import { Button, Typography } from "@mui/material";
import "../stylesheets/cart.scss";
import { Link } from "react-router-dom";
import { Info } from "@mui/icons-material";
import StripeCheckout from "react-stripe-checkout";
import feat from "../assets/images/maroon-black-gold-kyrie-max.png";

const Cart = () => {
  const { state, dispatch } = useContext(shopContext);

  const clickHandler = (e) => {
    dispatch({
      type: "Remove From Cart",
      payload: {
        name: e.target.dataset.name,
        price: e.target.dataset.price,
      },
    });
  };

  const makePayment = (token) => {
    console.log("Payment Successful");
  };

  return (
    <>
      <div className="cart-wrapper">
        <div className="items">
          <Typography
            variant="h4"
            sx={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            MY CART: {state.cart_list.length} item(s)
          </Typography>
          <ul className="ulist">
            {state.cart_list.length > 0 &&
              state.cart_list.map((shoe, idx) => {
                return (
                  <React.Fragment key={idx + 1}>
                    <li>
                      {idx + 1}.
                      <div className="left">
                        <img src={shoe.src} alt={shoe} width="100px" />
                      </div>
                      <div className="right">
                        <Typography variant="h5">
                          $ {shoe.price}
                          &nbsp; Qty: 1
                        </Typography>
                        <Typography variant="h5" sx={{ color: "#888" }}>
                          {shoe.name}
                        </Typography>
                        <Button
                          variant="outlined"
                          sx={{ width: "40%" }}
                          data-name={shoe.name}
                          data-price={shoe.price}
                          onClick={(e) => clickHandler(e)}
                        >
                          Remove
                        </Button>
                      </div>
                    </li>
                  </React.Fragment>
                );
              })}
          </ul>
        </div>
        <div className="checkout">
          <Typography variant="h5">
            Sub-total: $ {state.total_price.toFixed(2)}
          </Typography>
          <Typography variant="h5">
            Delivery: Standard Shipping <Info />
          </Typography>
          <br />
          <Typography variant="h4">
            Total: $ {state.total_price.toFixed(2)}
          </Typography>
          <br />
          <StripeCheckout
            token={makePayment}
            stripeKey="pk_test_51Mr9Y7JIrTBRC47f2v3EPG3S1YI0mLzEGappWoDkse8fyFvBnVgDahYgtiJhOufK0289EkjySlTKgatkGE4tg7Pq00nyhOMqF4"
            image={feat}
            description="Seller: Mavericks Balitaan"
            name={`Purchase ${state.cart_list.length} item(s)`}
            currency="USD"
            amount={state.total_price * 100}
          >
            <Button variant="contained" color="success">
              Pay With Card
            </Button>
          </StripeCheckout>
        </div>
        <div className="home-btn">
          <Link to="/">
            <Button variant="outlined">Keep Shopping</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
