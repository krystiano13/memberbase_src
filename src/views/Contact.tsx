import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/dist/contact.css";

interface ContactInterface {
  portrait: boolean;
}

const Contact: React.FC<ContactInterface> = ({ portrait }) => {
  return (
    <>
      <Navbar portrait={portrait} />
      <div className="ContactWrapper">
        <p className="ContactWrapper__paragraph">CONTACT</p>
        <h1 className="ContactWrapper__title">How can we help ?</h1>
        <h2 className="ContactWrapper__subtitle">
          Reach out to inquire about an ebook, submit an ebook, or with any
          other inquiry you might have.
        </h2>
        <form className="ContactWrapper__form">
          <section className="ContactWrapper__form__names">
            <div className="ContactWrapper__form__names__nameInputSection">
              <label className="ContactWrapper__form__names__nameInputSection__label">
                First Name*
              </label>
              <br />
              <input
                className="ContactWrapper__form__names__nameInputSection__input"
                placeholder="Your first name"
              />
            </div>
            <div className="ContactWrapper__form__names__nameInputSection">
              <label className="ContactWrapper__form__names__nameInputSection__label">
                Last Name*
              </label>
              <br />
              <input
                className="ContactWrapper__form__names__nameInputSection__input"
                placeholder="Your last name"
              />
            </div>
          </section>
          <label className="ContactWrapper__form__label">Email*</label>
          <input
            className="ContactWrapper__form__input"
            placeholder="example@email.com"
          />
          <label className="ContactWrapper__form__label">Your Message*</label>
          <textarea
            className="ContactWrapper__form__textarea"
            placeholder="example@email.com"
          />
          <button className="ContactWrapper__form__button" type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
