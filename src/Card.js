import React from "react";

const Card = (props) => {
  // console.log("test");
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
      <h1>RoboFriends</h1>
      <img alt="robots" src={`https://robohash.org/${props.id}`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default Card;
