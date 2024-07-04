import React from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../../Store/itemSlice";
const CardItems = ()=>{
    const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(itemAction.addItemToCart(item));
  };
    const items = [
        {
          id: 13,
          img: "https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Neon Watch",
          price: 21.99,
        },
        {
          id: 14,
          img: "https://images.pexels.com/photos/15568353/pexels-photo-15568353/free-photo-of-beautiful-bride-in-wedding-dress-near-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "White Bag",
          price: 21.99,
        },
        {
          id: 15,
          img: "https://images.pexels.com/photos/17858988/pexels-photo-17858988/free-photo-of-woman-in-bra-and-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          name: "Pro Glasses",
          price: 21.99,
        },
        {
          id: 16,
          img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Frock",
          price: 21.99,
        },
        {
          id: 17,
          img: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Classic Watch",
          price: 25.99,
        },
        {
          id: 18,
          img: "https://images.pexels.com/photos/5325884/pexels-photo-5325884.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Leather Bag",
          price: 35.99,
        },
        {
          id: 19,
          img: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Sport Glasses",
          price: 15.99,
        },
        {
          id: 20,
          img: "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Summer Dress",
          price: 29.99,
        },
      ];
    
      return (
        <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
          <div className="container">
            <div className="row">
              {items.map((item) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                  <div className="card shadow" style={{ width: "100%" }}>
                    <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="d-grid">
                        <button
                          className="btn btn-outline-info"
                          type="button"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
export default CardItems;