import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid w-11/12 grid-cols-1 mt-10 m-auto">{children}</div>
  );
};

export default Layout;
