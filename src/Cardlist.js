import React from "react";
// import { robots } from "./robots";
import Card from "./Card";
const Cardlist = ({ robots }) => {
  // if (true) {
  //   throw new Error("unstonks");
  // }
  const cardcomponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <React.StrictMode>{cardcomponent}</React.StrictMode>;
};

export default Cardlist;
