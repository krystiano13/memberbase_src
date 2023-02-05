import React from "react";
import "../styles/dist/account.css";
import logo2 from "../images/logo2.svg";
import { NavLink } from "react-router-dom";

interface AccountInterface {
  type: string;
}

const Account: React.FC<AccountInterface> = ({ type }) => {
  return (
    <div className="Account">
      <img className="Account__logo" src={logo2} alt="logo" />
      <form
        className="Account__form"
        id={type === "login" ? "" : type === "register" ? "register" : "reset"}
      >
        <h1 className="Account__form__title">
          {type === "login"
            ? "Log In"
            : type === "register"
            ? "Sign Up"
            : "Reset Password"}
        </h1>
        {type !== "register" && (
          <h2 className="Account__form__subtitle">
            {type === "login"
              ? "Fill in your log in details below."
              : "Enter your email and we will send you a password reset link."}
          </h2>
        )}
        <input
          id="emailInput"
          className="Account__form__input"
          placeholder="Your Email"
        />
        {type === "register" && (
          <input
            id="nameInput"
            className="Account__form__input"
            placeholder="Your Full Name"
          />
        )}
        {type !== "reset" && (
          <input
            id="passwordInput"
            className="Account__form__input"
            placeholder="Your Password"
          />
        )}
        {type === "register" && (
          <section className="Account__form__terms">
            <input className="Account__form__terms__checkbox" type="checkbox" />
            <label className="Account__form__terms__label">
              I agree to this website's privacy policy and terms of service
            </label>
          </section>
        )}
        <button className="Account__form__button" type="submit">
          {type === "login"
            ? "Log In"
            : type === "register"
            ? "Sign Up"
            : "Send Reset Email"}
        </button>
        {type !== "reset" && (
          <p className="Account__form__paragraph">
            {type === "login" && "Don't have an account?"}
            {type === "register" && "Already have an account?"}{" "}
            <NavLink
              to={
                type === "login" ? "/memberbase/register" : "/memberbase/login"
              }
              className="Account__form__paragraph__redirect"
            >
              {type === "login" ? "Sign Up" : "Log In"}
            </NavLink>
          </p>
        )}
      </form>
      {type === "login" && (
        <NavLink to="/memberbase/reset" className="Account__redirect">
          Forgot Your Password ?
        </NavLink>
      )}
    </div>
  );
};

export default Account;
