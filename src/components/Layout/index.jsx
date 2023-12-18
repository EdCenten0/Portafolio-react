import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid w-11/12 grid-cols-3 grid-rows-2 mt-10 items-center m-auto">
      {children}
    </div>
  );
};

export default Layout;
