import React from "react";

const Forms = () => {
  const [status, setStatus] = React.useState<string>("unsubmitted");
  const sendMessageSimulation = () => {
    if (status !== "unsubmitted") return;
    setStatus("submiting");
    //symulacja wysyłania formularza
    setTimeout(() => {
      setStatus("submitted");
    }, 400);
  };
  return (
    <section id="forms" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Forms</h2>
      <p className="GuideWrapper__section__paragraph">
        The form elements that you can use for forms across the website.
      </p>
      {status !== "submitted" && (
        <form className="GuideWrapper__section__form">
          <label className="GuideWrapper__section__form__label">Name</label>
          <input
            type="text"
            className="GuideWrapper__section__form__input"
            placeholder="Enter your name"
          />
          <label className="GuideWrapper__section__form__label">Category</label>
          <select className="GuideWrapper__section__form__select">
            <option value="">Select One...</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="mobile">Mobile Developer</option>
            <option value="other">Other</option>
          </select>
          <label className="GuideWrapper__section__form__label">Message</label>
          <textarea
            className="GuideWrapper__section__form__textarea"
            placeholder="Enter message here"
          ></textarea>
          <label className="GuideWrapper__section__form__label">
            <input
              type="radio"
              className="GuideWrapper__section__form__label__input"
            />
            <span>I'm a radio button</span>
          </label>
          <label className="GuideWrapper__section__form__label">
            <input
              type="checkbox"
              className="GuideWrapper__section__form__label__input"
            />
            <span>I'm a checkbox</span>
          </label>
          <button
            onClick={sendMessageSimulation}
            className="GuideWrapper__section__form__button"
            type="button"
          >
            {status === "unsubmitted" ? "Submit" : "Please Wait ..."}
          </button>
        </form>
      )}
      {status === "submitted" && (
        <>
          <p className="GuideWrapper__section__notification">
            Thank you! Your message has been received!
          </p>
        </>
      )}
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

export default Forms;
