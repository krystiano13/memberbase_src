import React from "react";
import { useNavigate } from "react-router";
import hero from "../images/hero.svg";
import "../styles/dist/hero.css";

interface HeroInterface {
  portrait: boolean;
  route: string;
}

const Hero: React.FC<HeroInterface> = ({ portrait, route }) => {
  const navigate = useNavigate();
  return (
    <div className={route === "home" ? "hero" : "hero smaller"}>
      <section className="hero__left">
        <h1 className="hero__left__title">
          {route === "home"
            ? " Access a library of free design resources"
            : "All Resources"}
        </h1>
        {route === "home" && (
          <>
            <p className="hero__left__paragraph">
              The best resources and books from around the web, collected and
              curated for your reading.
            </p>
            <button
              onClick={() => navigate("/memberbase/register")}
              className="hero__left__button"
            >
              Get Access Now
            </button>
          </>
        )}
      </section>
      {route === "home" && (
        <section className="hero__right">
          <img className="hero__right__image" src={hero} alt="logo image" />
        </section>
      )}
    </div>
  );
};

export default Hero;
