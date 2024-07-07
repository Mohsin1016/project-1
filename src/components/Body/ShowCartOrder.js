import React from "react";
const ShowCartOrder = () => {
  return (
    <>
      <div className="container border border-dark rounded p-4">
        <h3>Total Cart</h3>
        <div>
          <p>Subtotal :</p>
          <p></p>
        </div>
        <hr />
        <p>
          Shipping : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nobis, suscipit dolorum? Esse porro sequi consequuntur repudiandae
          fuga, necessitatibus molestiae.
        </p>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <hr />

        <button type="button" className="btn btn-success">
          Order Now
        </button>
      </div>
    </>
  );
};
export default ShowCartOrder;
