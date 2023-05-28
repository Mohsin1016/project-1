import React from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../../Store/itemSlice";
const RowTwo = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(itemAction.addItemToCart(item));
  };
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/b3.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">White T-Shirt</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 5,
                  img: "./images/b1.jpg",
                  name: "White T-Shirt",
                  price: 60.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g3.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Black Dress</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 6,
                  img: "./images/g3.jpg",
                  name: "Black Dress",
                  price: 40.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/g9.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Coat</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 7,
                  img: "./images/g9.jpg",
                  name: "Coat",
                  price: 90.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-grow-1 shadow" style={{ width: "18rem" }}>
        <img src="./images/b4.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hoody</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 8,
                  img: "./images/b4.jpg",
                  name: "Hoody",
                  price: 30.99,
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

export default RowTwo;
