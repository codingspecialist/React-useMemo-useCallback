import React from "react";

const B = (props) => {
  console.log("B()");
  return (
    <div>
      <h1>- B.js</h1>
      <button onClick={props.changeName}>App.js변경</button>
      <hr />
    </div>
  );
};

// 얕은 비교
export default React.memo(B);
