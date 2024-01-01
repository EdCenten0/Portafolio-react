import React from "react";
import "./index.css";

const MainPanel = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#376ca0" }}
      className=" w-11/12 h-auto m-auto rounded-md p-5  overflow-auto  "
    >
      {children}
    </div>
  );
};

export default MainPanel;
