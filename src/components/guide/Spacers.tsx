import React from "react";
import styled from "styled-components";

const Spacers = () => {
  return (
    <section id="spacers" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Spacers</h2>
      <p className="GuideWrapper__section__paragraph">
        Spacer elements using the 8-pt grid to give sections more room to
        breathe.
      </p>
      <>
        {SpacersData.map((item) => (
          <>
            <label className="GuideWrapper__section__margLabel">{item} PX</label>
            <Spacer key={item} size={item} />
          </>
        ))}
      </>
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

const SpacersData = ["16", "24", "32", "48", "64", "80", "96", "128"];
type Props = { size: string };
const Spacer = styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: #e7ecf0;
  margin-top: 1.5vh;
`;

export default Spacers;
