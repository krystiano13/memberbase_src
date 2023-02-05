import React from 'react';
import cap from "../../images/cap.svg";

const RichText = () => {
    return (
      <section id="rich" className="GuideWrapper__section">
        <h2 className="GuideWrapper__section__title">Rich Text</h2>
        <h1 className="GuideWrapper__section__heading rich">
          This is a header.
        </h1>
        <p className="GuideWrapper__section__paragraph">
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place instead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>
        <blockquote className="GuideWrapper__section__quote">
          A rich text element can be used with static or dynamic content. For
          static content, just drop it into any page and begin editing. For
          dynamic content, add a rich text field to any collection and then
          connect a rich text element to that field in the settings panel.
          Voila!
        </blockquote>
        <h2 className="GuideWrapper__section__subtitle">Latest updates</h2>
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
        <a href="google.com" className="GuideWrapper__section__link">
          More about Me
        </a>
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
}

export default RichText;