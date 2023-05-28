import React from "react";

const Cards = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5 ">
       <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow">
            <img
              src="/images/2.jpg"
              alt=""
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
            />
            <div className="card-img-overlay position-absolute bottom-0 w-100">
              <h5 className="card-title text-dark">Men</h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow">
            <img
              src="/images/4.jpg"
              alt=""
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
            />
            <div className="card-img-overlay position-absolute bottom-0 w-100">
              <h5 className="card-title text-dark">Women</h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow">
            <img
              src="/images/w4.jpg"
              alt=""
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
            />
            <div className="card-img-overlay position-absolute bottom-0 w-100">
              <h5 className="card-title text-dark">Accessories</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
