import React from "react";
import "../styles/dist/terms.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import TermArticle from "./TermArticle";

interface TermsInterface {
  title: string;
  portrait: boolean;
}

const Terms: React.FC<TermsInterface> = ({ title, portrait }) => {
  return (
    <>
      <Navbar portrait={portrait} />
      <div className="TermsWrapper">
        <section className="TermsWrapper__colored" />
        <article className="TermsWrapper__textContent">
          <h1 className="TermsWrapper__textContent__title">{title}</h1>
          <h2 className="TermsWrapper__textContent__subtitle">
            Last updated May 2021
          </h2>
          <p className="TermsWrapper__textContent__paragraph additionalPadding">
            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content. ‍
          </p>
          <TermArticle title="What information do we collect?" />
          <TermArticle title="Use of Information" />
          <TermArticle title="Use of Cookies" />
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
