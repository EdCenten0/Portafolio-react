import React from "react";

const SecondaryPanel = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#0b2c57" }}
      className=" order-3 h-fit w-11/12 rounded-md col-start-3 col-end-4 p-8"
    >
      {children}
    </div>
  );
};

export default SecondaryPanel;
