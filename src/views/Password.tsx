import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/dist/password.css";

interface PasswordInterface {
  portrait: boolean;
}

const Password: React.FC<PasswordInterface> = ({ portrait }) => {
  return (
    <>
      <Navbar portrait={portrait} />
      <main className="PasswordWrapper">
        <h1 className="PasswordWrapper__title">
          This page is password protected
        </h1>
        <form className="PasswordWrapper__form">
          <input
            type="password"
            className="PasswordWrapper__form__input"
            placeholder="Enter Your Password"
          />
          <button type="submit" className="PasswordWrapper__form__button">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Password;
