import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade position-relative container my-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            key="0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            key="1"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            key="2"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 img-fluid "
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Women</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Men</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Accessories</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
