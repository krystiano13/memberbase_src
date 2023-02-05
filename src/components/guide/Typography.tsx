import React from "react";
import cap from "../../images/cap.svg";

const Typography = () => {
  return (
    <section id="typography" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Typography</h2>
      <p className="GuideWrapper__section__paragraph">
        The different text sizes used throughout the site
      </p>
      <label className="GuideWrapper__section__label">Large H1</label>
      <h1 className="GuideWrapper__section__largeH1">This is a header.</h1>
      <label className="GuideWrapper__section__label">H1</label>
      <h1 className="GuideWrapper__section__heading">This is a header.</h1>
      <label className="GuideWrapper__section__label">H2</label>
      <h2 className="GuideWrapper__section__heading">This is a header.</h2>
      <label className="GuideWrapper__section__label">H3</label>
      <h3 className="GuideWrapper__section__heading">This is a header.</h3>
      <label className="GuideWrapper__section__label">H4</label>
      <h4 className="GuideWrapper__section__heading">This is a header.</h4>
      <label className="GuideWrapper__section__label">H5</label>
      <h5 className="GuideWrapper__section__heading">This is a header.</h5>
      <label className="GuideWrapper__section__label">H6</label>
      <h6 className="GuideWrapper__section__heading">This is a header.</h6>

      <label className="GuideWrapper__section__label smargin">
        Large Paragraph
      </label>
      <p className="GuideWrapper__section__ptag lp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.{" "}
      </p>
      <label className="GuideWrapper__section__label">Paragraph</label>
      <p className="GuideWrapper__section__ptag p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.{" "}
      </p>
      <label className="GuideWrapper__section__label">Small Paragraph</label>
      <p className="GuideWrapper__section__ptag sp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.{" "}
      </p>
      <label className="GuideWrapper__section__label">Quote</label>
      <blockquote className="GuideWrapper__section__quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </blockquote>
      <label className="GuideWrapper__section__label">List</label>
      <ul className="GuideWrapper__section__ul">
        <li className="GuideWrapper__section__ul__li">
          Heading line height is fixed
        </li>
        <li className="GuideWrapper__section__ul__li">
          All buttons now have tooltips
        </li>
        <li className="GuideWrapper__section__ul__li">
          Spell checker number issue fixed
        </li>
      </ul>
      <label className="GuideWrapper__section__label">Link</label>
      <br />
      <a href="google.com" className="GuideWrapper__section__link">
        More about Me
      </a>
      <label className="GuideWrapper__section__label">
        Figure With Caption
      </label>
      <br />
      <img
        className="GuideWrapper__section__image"
        src={cap}
        alt="figure with caption"
      />
      <figcaption className="GuideWrapper__section__caption">
        An image with caption
      </figcaption>
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

export default Typography;
