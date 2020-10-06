import React from "react";
import AA from "./AA";

const A = (props) => {
  console.log("A()");
  return (
    <div>
      <h1>- A.js {props.username}</h1>
      <hr />
      <AA />
    </div>
  );
};

export default React.memo(A);
