import React from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../../Store/itemSlice";
const RowFour = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(itemAction.addItemToCart(item));
  };
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
      <div className="card m-3 flex-fill col-sm-6  shadow" style={{ width: "18rem" }}>
        <img src="./images/w2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Neon Watch</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 13,
                  img: "./images/w2.jpg",
                  name: "Neon Watch",
                  price: 21.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-fill col-sm-6 shadow" style={{ width: "18rem" }}>
        <img src="./images/g10.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">White Bag</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 14,
                  img: "./images/g10.jpg",
                  name: "White Bag",
                  price: 21.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-fill col-sm-6 shadow" style={{ width: "18rem" }}>
        <img src="./images/gl1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pro Glasses</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 15,
                  img: "./images/gl1.jpg",
                  name: "Pro Glasses",
                  price: 21.99,
                })
              }
            >
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card m-3 flex-fill col-sm-6 shadow" style={{ width: "18rem" }}>
        <img src="./images/g4.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Frock</h5>
          <div className="d-grid">
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={() =>
                addToCart({
                  id: 16,
                  img: "./images/g4.jpg",
                  name: "Frock",
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

export default RowFour;
