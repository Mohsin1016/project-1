import React, { useRef } from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";

const SignUpModal = () => {
  const closeRef = useRef();

  const storeInfoHandler = (SignUpinfo) => {
    closeRef.current.click();
    axios
      .post(
        "https://ecommerce-shop-6f91e-default-rtdb.firebaseio.com/SignUp.json",
        SignUpinfo
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                SignUp
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <div className="modal-body">
              <SignUpForm onChange={storeInfoHandler} />
            </div>
            <div className=" d-grid m-2">
              <button
                type="button"
                className="btn btn-outline-info"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
