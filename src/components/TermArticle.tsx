import React from "react";

interface TermArticleInterface {
    title : string;
}

const TermArticle: React.FC<TermArticleInterface> = ({ title }) => {
  return (
    <>
      <h3 className="TermsWrapper__textContent__sectionTitle">{title}</h3>
      <p className="TermsWrapper__textContent__paragraph">
        A rich text element can be used with static or dynamic content. For
        static content, just drop it into any page and begin editing. For
        dynamic content, add a rich text field to any collection and then
        connect a rich text element to that field in the settings panel. Voila!
      </p>
      <p className="TermsWrapper__textContent__paragraph">
        A rich text element can be used with static or dynamic content. For
        static content, just drop it into any page and begin editing. For
        dynamic content, add a rich text field to any collection and then
        connect a rich text element to that field in the settings panel. Voila!
      </p>
      <p className="TermsWrapper__textContent__paragraph">
        Headings, paragraphs, blockquotes, figures, images, and figure captions
        can all be styled after a class is added to the rich text element using
        the "When inside of" nested selector system.
      </p>
    </>
  );
};

export default TermArticle;
