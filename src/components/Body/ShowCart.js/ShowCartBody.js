import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { itemAction } from "../../Store/itemSlice";
import ShowCartOrder from "./ShowCartOrder";

const ShowCartBody = () => {
  const dispatch = useDispatch();

  const addHandler = (item) => {
    dispatch(itemAction.addItemToCart(item));
    console.log(item);
  };

  const removeHandler = (id) => {
    dispatch(itemAction.removeItemFromCart(id));
    console.log(id);
  };
  var items = useSelector((state) => state.item.items);
    
  return (
    <div className="row my-5 mx-2">
      <div className="col-8 border border-dark rounded p-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <th scope="row">
                  <img src={item.img} alt={item.name} width="60" height="80" />{" "}
                  {item.name}
                </th>
                <td>{item.price}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => removeHandler(item.id)}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      {item.quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => addHandler(item)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-4">
        <ShowCartOrder />
      </div>
    </div>
  );
};

export default ShowCartBody;
