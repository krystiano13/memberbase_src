import React from "react";
import Button from "./Button";

const Buttons = () => {
  return (
    <section id="buttons" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Buttons</h2>
      <p className="GuideWrapper__section__paragraph">
        The different buttons used across the site.
      </p>
      <div className="GuideWrapper__section__buttonsContainer">
        <section className="GuideWrapper__section__buttonsContainer__grid--label">
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Primary
          </label>
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Dark Grey
          </label>
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Light Grey
          </label>
        </section>
        <section className="GuideWrapper__section__buttonsContainer__grid">
          <Button
            bgcolor="#333"
            color="white"
            height="4.5vh"
            fontSize="2.15vh"
            border="none"
            hovercolor="#555"
          >
            Sign Up
          </Button>
          <Button
            bgcolor="#495158"
            color="white"
            height="4.5vh"
            fontSize="2.15vh"
            border="none"
            hovercolor="#566068"
          >
            Sign Up
          </Button>
          <Button
            bgcolor="#f5f6f7"
            color="#626a72"
            height="4.5vh"
            fontSize="2.15vh"
            border="none"
            hovercolor="#dde9f7"
          >
            Sign Up
          </Button>
        </section>
        <section className="GuideWrapper__section__buttonsContainer__grid--label">
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Outline
          </label>
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Disabled
          </label>
        </section>
        <section className="GuideWrapper__section__buttonsContainer__grid">
          <Button
            bgcolor="white"
            color="#333"
            height="4.5vh"
            fontSize="2.15vh"
            border="solid #333 0.2vh"
            hovercolor="#e6f0f3"
          >
            Get in touch
          </Button>
          <Button
            bgcolor="#f5f6f7"
            color="#cbd5df"
            height="4.5vh"
            fontSize="2vh"
            border="none"
            hovercolor="#f5f6f7"
          >
            Not Available
          </Button>
        </section>
        <section className="GuideWrapper__section__buttonsContainer__grid--label">
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Small Primary
          </label>
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Dark Grey
          </label>
          <label className="GuideWrapper__section__buttonsContainer__grid--label__label">
            Light Grey
          </label>
        </section>
        <section className="GuideWrapper__section__buttonsContainer__grid">
          <Button
            bgcolor="#333"
            color="white"
            height="3.5vh"
            fontSize="1.8vh"
            border="none"
            hovercolor="#555"
          >
            Sign Up
          </Button>
          <Button
            bgcolor="#495158"
            color="white"
            height="3.5vh"
            fontSize="1.8vh"
            border="none"
            hovercolor="#566068"
          >
            Sign Up
          </Button>
          <Button
            bgcolor="#f5f6f7"
            color="#626a72"
            height="3.5vh"
            fontSize="1.8vh"
            border="none"
            hovercolor="#dde9f7"
          >
            Sign Up
          </Button>
        </section>
      </div>
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

export default Buttons;
