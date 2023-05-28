import React from "react";

const Paggination = () => {
  return (
    <>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center mt-5"
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="/">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paggination;
