import React from "react";

const Cards = () => {
  const items = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Men",
      alt: "Men's fashion",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/889766596/photo/beautiful-woman.webp?b=1&s=170667a&w=0&k=20&c=YDiLAX208Y3RacbopYIHZkHRdmuOTsUA_hlyY7qrXVk=",
      title: "Women",
      alt: "Women's fashion",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Accessories",
      alt: "Fashion accessories",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
          {items.map((item) => (
            <div className="col" key={item.id}>
              <div className="card shadow">
                <img
                  src={item.img}
                  alt={item.alt}
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="100%"
                />
                <div className="card-img-overlay position-absolute bottom-0 w-100">
                  <h5 className="card-title text-dark">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
