import React from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../../Store/itemSlice";

const RowOne = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(itemAction.addItemToCart(item));
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center py-3 ">
      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/b1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Brown Style</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 1,
                  img: "./images/b1.jpg",
                  name: "Brown Style",
                  price: 19.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Black Shirt</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 2,
                  img: "./images/g2.jpg",
                  name: "Black Shirt",
                  price: 22.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/b2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Jacket&Shoes</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 3,
                  img: "./images/b2.jpg",
                  name: "Jacket&Shoes",
                  price: 20.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Blue Shirt</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 4,
                  img: "./images/g1.jpg",
                  name: "Blue Shirt",
                  price: 21.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowOne;
