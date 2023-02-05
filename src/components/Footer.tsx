import React from "react";
import "../styles/dist/footer.css";
import logo from "../images/logo.svg";
import FooterHyperLinks from "./FooterHyperLinks";
import { NavLink } from "react-router-dom";

const Footer = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])
  return (
    <footer className="Footer">
      <section className="Footer__logoPart">
        <img src={logo} alt="logo" className="Footer__logoPart__image" />
        <p className="Footer__logoPart__paragraph">
          Built by{" "}
          <span className="Footer__logoPart__paragraph__span">
            Krystian Zieja
          </span>
        </p>
        <p className="Footer__logoPart__paragraph">
          Powered by{" "}
          <span className="Footer__logoPart__paragraph__span">
            Krystian Zieja
          </span>
        </p>
        <p className="Footer__logoPart__rights">
          © 2022 Memberbase. All Rights Reserved.
        </p>
      </section>
      <section className="Footer__hyperlinks">
        <div
          className="Footer__hyperlinks__container"
        >
          <p className="Footer__hyperlinks__container__title">WEBSITE</p>
          {FooterHyperLinks.website.data.map((item) => (
            <NavLink
              className="Footer__hyperlinks__container__hyperlink"
              to={item.to}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="Footer__hyperlinks__container">
          <p className="Footer__hyperlinks__container__title">MEMBERSHIP</p>
          {FooterHyperLinks.memberShip.data.map((item) => (
            <NavLink
              className="Footer__hyperlinks__container__hyperlink"
              to={item.to}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="Footer__hyperlinks__container">
          <p className="Footer__hyperlinks__container__title">ADMIN</p>
          {FooterHyperLinks.admin.data.map((item) => (
            <NavLink
              className="Footer__hyperlinks__container__hyperlink"
              to={item.to}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
