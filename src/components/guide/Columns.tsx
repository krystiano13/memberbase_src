import React from "react";
import Column from "./Column";

const Columns = () => {
  const [ columnsData,setColumnsData ] = React.useState<number[]>([]);

  React.useEffect(() => {
    const arr = [];
    for (let i = 1; i <= 12; i++) {
      arr.push(i);
    }
    setColumnsData(arr);
  }, []);

  return (
    <section id="columns" className="GuideWrapper__section">
      <h2 className="GuideWrapper__section__title">Columns</h2>
      <p className="GuideWrapper__section__paragraph">
        The 12 column grid system to make it easy to align sections across
        different screen sizes.
      </p>
      <section id={columnsData.length.toString()}>
        {columnsData.map((item) => (
          <>
            <label className="GuideWrapper__section__margLabel">
              {item.toString()} Col
            </label>
            <Column key={item.toString()} multiplier={item} />
          </>
        ))}
      </section>
      <div className="GuideWrapper__section__divider" />
    </section>
  );
};

export default Columns;
