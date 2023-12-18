import React from "react";
import "./index.css";

const MainPanel = ({ children }) => {
  return (
    <div className=" w-11/12 h-32 m-auto rounded-md bg-white">{children}</div>
  );
};

export default MainPanel;
