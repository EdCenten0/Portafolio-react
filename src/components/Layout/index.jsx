import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center  gap-6 lg:items-start lg:grid w-full grid-cols-1 mt-10 m-auto p-2 ">
      {children}
    </div>
  );
};

export default Layout;
