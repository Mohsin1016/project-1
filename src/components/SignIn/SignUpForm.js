import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { displayAction } from "../Store/DisplayCart";
const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const getLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const getEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const getPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const SignUpinfo = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
    };
    props.onChange(SignUpinfo);
    dispatch(displayAction.displaySignUp());
  };
  return (
    <>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="First name" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              id="First name"
              onChange={getFirstNameHandler}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="Last name" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="Last name"
              onChange={getLastNameHandler}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            onChange={getEmailHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            onChange={getPasswordHandler}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-info">
          SignUp
        </button>
      </form>
    </>
  );
};
export default SignUpForm;
