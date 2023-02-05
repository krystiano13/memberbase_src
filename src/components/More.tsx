import React from "react";
import "../styles/dist/more.css";

const More = () => {
  return (
    <div className="Wrapper">
      <h2 className="Wrapper__title">Get more great resources</h2>
      <h3 className="Wrapper__text">
        Get the latest design resources from across the web. Straight to your
        inbox.
      </h3>
      <form className="Wrapper__form">
        <input
          className="Wrapper__form__input"
          placeholder="Enter Your Email"
          required
        />
        <button className="Wrapper__form__button">Subscribe</button>
      </form>
    </div>
  );
};

export default More;
