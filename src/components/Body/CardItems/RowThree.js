import React from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../../Store/itemSlice";

const RowThree = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(itemAction.addItemToCart(item));
  };
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g8.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Blue Bag</h5>
          <div className="d-grid">
              <button className="btn btn-outline-info" type="button"
               onClick={() =>
                addToCart({
                  id: 9,
                  img: "./images/g8.jpg",
                  name: "Blue Bag",
                  price: 60.99,
                })
              }>
                Add to Cart   <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
        </div>
      </div>
      
      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/w1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Watch</h5>
          <div className="d-grid">
              <button className="btn btn-outline-info" type="button"
               onClick={() =>
                addToCart({
                  id: 10,
                  img: "./images/w1.jpg",
                  name: "Watch",
                  price: 60.99,
                })
              }>
                Add to Cart   <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g5.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Jeans</h5>
          <div className="d-grid">
              <button className="btn btn-outline-info" type="button"
               onClick={() =>
                addToCart({
                  id: 11,
                  img: "./images/g5.jpg",
                  name: "Jeans",
                  price: 60.99,
                })
              }>
                Add to Cart   <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g6.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Shoe&Shirt</h5>
          <div className="d-grid">
              <button className="btn btn-outline-info" type="button"
               onClick={() =>
                addToCart({
                  id: 12,
                  img: "./images/g6.jpg",
                  name: "Shoe&Shirt",
                  price: 60.99,
                })
              }>
                Add to Cart   <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RowThree;
