import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center  gap-6 md:items-start md:grid w-11/12 grid-cols-1 mt-10 m-auto p-4 ">
      {children}
    </div>
  );
};

export default Layout;
