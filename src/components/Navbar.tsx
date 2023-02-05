import React, { ChangeEvent, ChangeEventHandler } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../styles/dist/navbar.css";

import logo from "../images/logo.svg";
import search from "../images/search.png";

interface NavbarInterface {
  portrait: boolean;
  handleSearch?: (value: string) => void;
}

const Navbar: React.FC<NavbarInterface> = ({ portrait, handleSearch }) => {
  const handleHamburgerMenuSwitch = () => {
    document.querySelector("#navButtons")?.classList.toggle("switched");
  };

  const searchResources = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    handleSearch
      ? handleSearch(value)
      : () => console.error("Couldn't use that function");
    console.log(value);
  };

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top : 0, behavior : 'smooth' });
  },[location.pathname]);

  return (
    <nav className="navbar">
      <section className="navbar__left">
        <img
          onClick={() => navigate("/memberbase/")}
          className="navbar__left__logo"
          src={logo}
          alt="logo"
        />
        {portrait === false && (
          <form className="navbar__left__form">
            <div className="navbar__left__form__icon">
              <img
                src={search}
                alt=""
                className="navbar__left__form__icon__image"
              />
            </div>
            <input
              className="navbar__left__form__input"
              placeholder="Search resources"
              onChange={searchResources}
            />
          </form>
        )}
      </section>
      <section className="navbar__right">
        {portrait === false && (
          <>
            <NavLink className="navbar__right__a" to="/memberbase/resources">
              <button className="navbar__right__a__btn">All Resources</button>
            </NavLink>
            <NavLink className="navbar__right__a" to="/memberbase/login">
              <button className="navbar__right__a__btn">Log In</button>
            </NavLink>
            <NavLink className="navbar__right__a" to="/memberbase/register">
              <button className="navbar__right__a__btn--bg">
                Free Sign Up
              </button>
            </NavLink>
          </>
        )}
        {portrait === true && (
          <>
            <div
              onClick={handleHamburgerMenuSwitch}
              className="navbar__right__hamburgerMenu"
            >
              <section className="navbar__right__hamburgerMenu__stripe"></section>
              <section className="navbar__right__hamburgerMenu__stripe"></section>
              <section className="navbar__right__hamburgerMenu__stripe"></section>
            </div>
            <div
              id="navButtons"
              className="navbar__right__hamburgerButtons switched"
            >
              <NavLink
                className="navbar__right__hamburgerButtons__a"
                to="/memberbase/resources"
              >
                <button
                  className="navbar__right__hamburgerButtons__a__btn"
                >
                  All Resources
                </button>
              </NavLink>
              <NavLink className="navbar__right__a" to="/memberbase/login">
                <button
                  className="navbar__right__hamburgerButtons__a__btn"
                >
                  Log In
                </button>
              </NavLink>
              <NavLink className="navbar__right__a" to="/memberbase/register">
                <button
                  className="navbar__right__hamburgerButtons__a__btn--bg"
                >
                  Free Sign Up
                </button>
              </NavLink>
            </div>
          </>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
