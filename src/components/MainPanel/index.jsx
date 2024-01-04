import React from "react";
import "./index.css";

const MainPanel = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#376ca0" }}
      className=" order-2 w-11/12 h-auto m-auto rounded-md p-5  overflow-auto MainPanel "
    >
      {children}
    </div>
  );
};

export default MainPanel;
