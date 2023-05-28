import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../../Store/DisplayCart";

const LoginModal = () => {
  const dispatch = useDispatch();
  const closeRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const getUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const getPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    getHttpHandler();
  }, []);

  const sendHttpHandler = (event) => {
    closeRef.current.click();
    event.preventDefault();
    const user = {
      Email: userName,
      Password: password,
    };

    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      let loggedIn = false;
      parsedUsers.forEach((storedUser) => {
        if (
          user.Email === storedUser.Email &&
          user.Password === storedUser.Password
        ) {
          console.log("Logged in");
          loggedIn = true;
        }
      });
      if (loggedIn) {
        dispatch(displayAction.displaySignIn());
      } else {
        console.log("not logged in");
      }
    }

    const users = storedUsers ? JSON.parse(storedUsers) : [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const getHttpHandler = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      console.log(parsedUsers);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Log In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={sendHttpHandler}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    onChange={getUserNameHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    onChange={getPasswordHandler}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-outline-info">
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
