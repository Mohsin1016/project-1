import { useSelector } from "react-redux";
const CartItems = () => {
  const items = useSelector((state) => state.item.items);
  
  if(!items || items.length === 0 ){
    console.log(items);
  }
  else{
    localStorage.setItem("items", JSON.stringify(items));
  }
 
  const storedData = localStorage.getItem("items");
  const parsedData = JSON.parse(storedData);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
      {parsedData.map((item) => (
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
