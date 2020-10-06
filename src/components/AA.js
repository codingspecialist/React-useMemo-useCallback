import React from "react";

const AA = () => {
  console.log("AA()");

  return (
    <div>
      <h1>-- AA.js</h1>
      <hr />
    </div>
  );
};

export default React.memo(AA);
