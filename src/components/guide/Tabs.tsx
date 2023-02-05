import React from "react";

const Tabs = () => {
  const handleTabSwitch = (e: Event) => {
    const id = (e.target as Element).id;
    const buttons = document.querySelectorAll(
      ".GuideWrapper__section__flex__button"
    );
    buttons.forEach((element) => {
      if (element.id !== id) {
        element.classList.remove("selected");
      } else element.classList.add("selected");
    });
  };
  React.useEffect(() => {
    const Buttons = document.querySelectorAll(
      ".GuideWrapper__section__flex__button"
    );
    Buttons.forEach((element) =>
      element.addEventListener("click", (e) => handleTabSwitch(e))
    );
  }, []);
  return (
    <section id="tabs" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Tabs</h2>
      <p className="GuideWrapper__section__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="GuideWrapper__section__flex">
        <button
          id="bt1"
          className="GuideWrapper__section__flex__button selected"
        >
          All Posts
        </button>
        <button id="bt2" className="GuideWrapper__section__flex__button">
          Popular Posts
        </button>
        <button id="bt3" className="GuideWrapper__section__flex__button ">
          Rising Posts
        </button>
      </div>
    </section>
  );
};

export default Tabs;
