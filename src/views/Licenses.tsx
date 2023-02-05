import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/dist/licenses.css";

import l1 from "../images/l1.svg";
import l2 from "../images/l2.svg";
import l3 from "../images/l3.svg";
import error from "../images/error.svg";

interface LicensesInterface {
  portrait: boolean;
}

const Licenses: React.FC<LicensesInterface> = ({ portrait }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar portrait={portrait} />
      <main className="LicensesWrapper">
        <h1 className="LicensesWrapper__title">Licenses</h1>
        <p className="LicensesWrapper__description">
          All graphical assets in this template are licensed for personal and
          commercial use. If you'd like to use a specific asset, please check
          the license below
        </p>
        <section className="LicensesWrapper__info">
          <div className="LicensesWrapper__info__images">
            <img
              className="LicensesWrapper__info__images__img"
              src={l3}
              alt="SVG Icon"
            />
            <img
              className="LicensesWrapper__info__images__img"
              src={error}
              alt="SVG Icon"
            />
            <img
              className="LicensesWrapper__info__images__img"
              src={l2}
              alt="SVG Icon"
            />
            <img
              className="LicensesWrapper__info__images__img"
              src={l1}
              alt="SVG Icon"
            />
          </div>
          <div className="LicensesWrapper__info__text">
            <h2 className="LicensesWrapper__info__text__title">
              Prosphor Icons
            </h2>
            <a
              className="LicensesWrapper__info__text__link"
              href="https://github.com/phosphor-icons/web"
            >
              License Link
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Licenses;
