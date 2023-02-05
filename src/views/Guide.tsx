import React from "react";
import "../styles/dist/guide.css";
import cap from "../images/cap.svg";

import GuideNavbar from "../components/guide/GuideNavbar";
import Header from "../components/guide/Header";
import Typography from "../components/guide/Typography";
import RichText from "../components/guide/RichText";
import Colors from "../components/guide/Colors";
import Buttons from "../components/guide/Buttons";
import Columns from "../components/guide/Columns";
import Grids from "../components/guide/Grids";
import Spacers from "../components/guide/Spacers";
import Forms from "../components/guide/Forms";
import Tabs from "../components/guide/Tabs";

interface GuideInteface {
  portrait: boolean;
}

const Guide: React.FC<GuideInteface> = ({ portrait }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <GuideNavbar portrait={portrait} />
      <div className="GuideWrapper">
        <Header />
        <Typography />
        <RichText />
        <Colors />
        <Buttons />
        <Columns />
        <Grids />
        <Spacers />
        <Forms />
        <Tabs />
        <p className="GuideWrapper__copyright">
          © Memberbase. Powered by{" "}
          <span className="GuideWrapper__copyright__span">Krystian Zieja</span>
        </p>
      </div>
    </>
  );
};

export default Guide;
