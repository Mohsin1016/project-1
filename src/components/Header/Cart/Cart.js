import React from "react";
import CartItems from "../CartItems/CartItems";
import { useDispatch } from "react-redux";
import { displayAction } from "../../Store/DisplayCart";

const Cart = () => {
  const dispatch = useDispatch();
  const showCartHandler = ()=>{
    dispatch(displayAction.displayCart());
  };
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
            <button type="button" className="btn btn-outline-info" onClick={showCartHandler}>Show Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
