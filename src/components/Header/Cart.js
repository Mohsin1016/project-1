import React from "react";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <CartItems />
          <div className="d-grid">
            <Link to="/shop-cart" type="button" className="btn btn-outline-info">Show Cart</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
