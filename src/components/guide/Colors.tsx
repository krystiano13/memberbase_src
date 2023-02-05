import React from "react";
import ColorBlock from "./ColorBlock";
import ColorsData from "./ColorsData";

const Colors = () => {
  return (
    <section id="colors" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Colors</h2>
      <p className="GuideWrapper__section__paragraph">
        The different weights of greys and colours used throughout the website.
      </p>
      <div className="GuideWrapper__section__container">
        {ColorsData.map((item) => (
          <ColorBlock bgcolor={item} />
        ))}
      </div>
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

export default Colors;
