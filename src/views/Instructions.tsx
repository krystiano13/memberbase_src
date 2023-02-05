import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/dist/instructions.css";
import instruction from "../images/instruction.png";

interface InstructionsInterface {
  portrait: boolean;
}

const Instructions: React.FC<InstructionsInterface> = ({ portrait }) => {
  return (
    <>
      <Navbar portrait={portrait} />
      <main className="InstructionsWrapper">
        <h1 className="InstructionsWrapper__title">Instructions</h1>
        <h2 className="InstructionsWrapper__subtitle">Naming Conventions</h2>
        <p className="InstructionsWrapper__description">
          I've built a naming convention system that will make it easy to edit
          and add new content and sections as you go through and create new
          pages. The layouts are built using a 12 column grid (which you can
          read more about here), and also using grid blocks.
        </p>
        <p className="InstructionsWrapper__description">
          I've found that these are the best ways to create complex sections and
          beautiful pages, without having to completely reinvent the wheel by
          adding in hundreds of different classes. Find out more about how they
          work below.
        </p>
        <img
          className="InstructionsWrapper__image"
          src={instruction}
          alt="instruction image"
        />
        <h2 className="InstructionsWrapper__subtitle">
          Column naming conventions
        </h2>
        <p className="InstructionsWrapper__description">
          Columns are a great way to be able to build hundreds of different
          unique layouts, all while keeping within the same simple system.
        </p>
        <p className="InstructionsWrapper__description">
          All you need to do is set up a "Column" class, then set up the
          different sizes for on desktop, tablet, and mobile. It's best to build
          on a 12 Column layout, as this is the structure that is currently most
          commonly used throughout the web, and most website designs are
          initially built on a 12 column layout.
        </p>
        <p className="InstructionsWrapper__description">
          This is much more flexible than using the built in Column element, as
          if you use the built in Columns, you'll find their limitations when
          you get stuck building a complex layout. ‍
        </p>
        <h2 className="InstructionsWrapper__subtitle">
          Customizable to suit your brand
        </h2>
        <p className="InstructionsWrapper__description">
          Feel like changing something in the template? All of our templates
          where built using Webflow without writing code. That means you can
          customize them in every way to suit your brand. Learn more about how
          to customize Webflow sites at Help Center ‍
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Instructions;
