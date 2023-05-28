import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { itemAction } from "../../Store/itemSlice";

const mainArray = [];

const CartItems = () => {
  const dispatch = useDispatch();

  const obj = useSelector((state) => state.item.obj);

  const [prevObj, setPrevObj] = useState({});

  useEffect(() => {
    if (obj.name !== prevObj.name) {
      mainArray.push(obj);
      localStorage.setItem("mainArray", JSON.stringify(mainArray));
      setPrevObj(obj);
    }
  }, [obj, prevObj]);
 
  const storedObj = localStorage.getItem("mainArray");
    if (storedObj) {
    var  parsedObj = JSON.parse(storedObj);
      dispatch(itemAction.addItemToCart(parsedObj))
    };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
      {parsedObj.map((item) => (
        <div className="col" key={item.id}>
          <div className="card h-100">
            <img src={item.img} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
