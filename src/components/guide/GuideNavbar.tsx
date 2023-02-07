import React from "react";
import logo2 from "../../images/logo2.svg";

interface GuideNavbarInterface {
  portrait: boolean;
}

const GuideNavbar: React.FC<GuideNavbarInterface> = ({ portrait }) => {
  const hamburgerMenu = React.useRef<HTMLElement>(null);
  const slider = React.useRef<HTMLElement>(null);
  const handleHamburgerMenuClick = () => {
    hamburgerMenu.current?.classList.toggle("hamburgerShown");
    slider.current?.classList.toggle("sliderShown");
  };
  return (
    <>
      {portrait === true && (
        <section ref={slider} className="Slider">
          {NavbarButtons.map((item) => (
            <a className="Slider__link" href={item.href}>
              {item.name}
            </a>
          ))}
        </section>
      )}

      <nav className="GuideNavbar">
        <img className="GuideNavbar__image" src={logo2} alt="logo" />
        {portrait === false && (
          <section className="GuideNavbar__links">
            {NavbarButtons.map((item) => (
              <a className="GuideNavbar__links__link" href={item.href}>
                {item.name}
              </a>
            ))}
          </section>
        )}
        {portrait === true && (
          <section
            id="hamburger"
            onClick={handleHamburgerMenuClick}
            className="GuideNavbar__hamburger-menu"
          >
            <div className="GuideNavbar__hamburger-menu__stripe" />
            <div className="GuideNavbar__hamburger-menu__stripe" />
            <div className="GuideNavbar__hamburger-menu__stripe" />
          </section>
        )}
      </nav>
    </>
  );
};

export default GuideNavbar;

const NavbarButtons = [
  {
    name: "Typography",
    href: "#typography",
  },
  {
    name: "Rich Text",
    href: "#rich",
  },
  {
    name: "Colors",
    href: "#colors",
  },
  {
    name: "Buttons",
    href: "#buttons",
  },
  {
    name: "Columns",
    href: "#columns",
  },
  {
    name: "Grids",
    href: "#grids",
  },
  {
    name: "Spacers",
    href: "#spacers",
  },
  {
    name: "Forms",
    href: "#forms",
  },
  {
    name: "Tabs",
    href: "#tabs",
  },
];
