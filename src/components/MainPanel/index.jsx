import React from "react";
import "./index.css";

const MainPanel = ({ children }) => {
  return (
    <div className=" w-11/12 h-auto m-auto rounded-md p-5 bg-white overflow-auto">
      {children}
    </div>
  );
};

export default MainPanel;
