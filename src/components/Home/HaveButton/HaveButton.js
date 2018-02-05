import React from "react";

const HaveButton = ({ addToHave, item }) => {
  return (
    <div>
      <button onClick={() => addToHave(item)}>Have</button>
    </div>
  );
};

export default HaveButton;
