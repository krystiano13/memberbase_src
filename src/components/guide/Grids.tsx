import React from "react";
import Grid from "./Grid";

const Grids = () => {
  return (
    <section id="grids" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Grids</h2>
      <p className="GuideWrapper__section__paragraph">
        Different grid layouts to use across your site
      </p>
      <>
        {GridsData.map((item) => {
          const arr = [];
          for (let i = 0; i < item.amount; i++) {
            arr.push(i);
          }
          return (
            <>
              <label className="GuideWrapper__section__margLabel">
                {item.name}
              </label>
              <Grid
                template={item.columns}
                className="GuideWrapper__section__customGrid"
              >
                {arr.map((element) => (
                  <div className="GuideWrapper__section__customGrid__gridElement" />
                ))}
              </Grid>
            </>
          );
        })}
      </>
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

const GridsData = [
  {
    name: "4 Grid",
    columns: "1fr 1fr 1fr 1fr",
    amount: 4,
  },
  {
    name: "3 Grid",
    columns: "1fr 1fr 1fr",
    amount: 3,
  },
  {
    name: "2 Grid",
    columns: "1fr 1fr",
    amount: 2,
  },
  {
    name: "2-1 Grid",
    columns: "2fr 1fr",
    amount: 2,
  },
  {
    name: "1-2 Grid",
    columns: "1fr 2fr",
    amount: 2,
  },
];

export default Grids;
