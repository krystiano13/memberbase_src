import React from "react";
import { useNavigate } from "react-router";
import "../styles/dist/resources.css";

import r1 from "../images/r1.svg";
import r2 from "../images/r2.svg";
import r3 from "../images/r3.svg";
import r4 from "../images/r4.svg";
import r5 from "../images/r5.svg";

interface ResourcesInterface {
  search: string;
}

const Resources: React.FC<ResourcesInterface> = ({ search }) => {
  const [resourcesArray, setResourcesArray] = React.useState([
    ...ResourcesArray,
  ]);
  React.useEffect(() => {
    const arr = ResourcesArray;
    setResourcesArray(arr.filter((item) => item.title.includes(search)));
  }, [search]);
  const navigate = useNavigate();
  return (
    <main className="wrapper">
      <section className="wrapper__heading">
        <h2 className="wrapper__heading__title">Featured Resources</h2>
        <button
          onClick={() => navigate("/memberbase/resources")}
          className="wrapper__heading__button"
        >
          See All Resources
        </button>
      </section>
      <section className="wrapper__resourceCards">
        {resourcesArray.map((item) => (
          <div
            key={item.id}
            className={
              item.left === true
                ? "wrapper__resourceCards__card left"
                : "wrapper__resourceCards__card"
            }
          >
            <img
              className="wrapper__resourceCards__card__image"
              src={item.imgSrc}
              alt={`${item.title} Image`}
            />
            <p className="wrapper__resourceCards__card__writtenBy">
              {item.writtenBy}
            </p>
            <h3 className="wrapper__resourceCards__card__title">
              {item.title}
            </h3>
            <p className="wrapper__resourceCards__card__description">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

const ResourcesArray = [
  {
    id: 0,
    left: false,
    imgSrc: r1,
    writtenBy: "By Nikolai Bain",
    title: "Grids & Alignment",
    description:
      "Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.",
  },
  {
    id: 1,
    left: true,
    imgSrc: r2,
    writtenBy: "By Maxwell Milton",
    title: "Remote Work for Design Teams",
    description:
      "Repudiandae asperiores excepturi repellat minus id et. Saepe molestiae accusantium fugit et aut. Reicie",
  },
  {
    id: 2,
    left: true,
    imgSrc: r3,
    writtenBy: "By Franko Realguy",
    title: "Design Systems in Product Teams",
    description:
      "Ut libero molestias excepturi veniam et dicta assumenda tenetur voluptatem. Qui dolor officiis eum. Doloribus odit qui quia blanditiis omnis asperiores perspiciatis qui deleniti.",
  },
  {
    id: 3,
    left: false,
    imgSrc: r4,
    writtenBy: "By Nikolai Bain",
    title: "All in One Color Handbook",
    description:
      "Vel esse et temporibus inventore alias assumenda. Repellat sit accusamus id sed est animi vel. Odit non ut reprehenderit consequatur sit aliquam. Aut aliquid consequatur",
  },
  {
    id: 4,
    left: true,
    imgSrc: r5,
    writtenBy: "By Tim Tommons",
    title: "Digital Wellbeing and Support",
    description:
      "Dignissimos dolores enim ipsum quia occaecati voluptas aut delectus. Reiciendis recusandae minima quod qui. Eum dicta et nihil ad et nam. Vitae et itaque porro. Ipsa distinctio laboriosam veritatis. Minus quia eos ut.",
  },
];

export default Resources;
