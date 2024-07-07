import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="py-5 mt-5 text-light bg-dark px-3">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>CATEGORIES</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Women
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Men
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Shoes
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Watches
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>HELP</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Track Order
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Shipping
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <p>© 2023 Company, Inc. All rights reserved.</p>{" "}                   
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <i className="fa-brands fa-facebook fa-lg"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
                <i className="fa-brands fa-twitter fa-lg"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/">
              <i className="fa-brands fa-instagram fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
