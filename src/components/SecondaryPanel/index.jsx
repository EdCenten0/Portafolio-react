import React from "react";

const SecondaryPanel = ({ children }) => {
  return (
    <div className="h-full w-11/12 bg-white rounded-md col-start-3 col-end-4">
      {children}
    </div>
  );
};

export default SecondaryPanel;