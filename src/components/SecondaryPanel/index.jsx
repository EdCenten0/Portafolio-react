import React from "react";

const SecondaryPanel = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#376ca0" }}
      className=" h-fit w-11/12 rounded-md col-start-3 col-end-4 p-8"
    >
      {children}
    </div>
  );
};

export default SecondaryPanel;
