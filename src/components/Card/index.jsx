import React from "react";

const Card = ({ title, description, imageURL, projectURL }) => {
  return (
    <div className=" h-80 w-52  border border-gray-500  flex flex-col gap-3 ">
      <div className=" w-full h-28 ">
        <a href={projectURL}>
          <img
            src={imageURL}
            alt={title}
            className=" border-b-2 border-gray-400 "
          />
        </a>
      </div>
      <div className="p-4">
        <h4 className=" font-semibold text-md">{title}</h4>
        <p className=" text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
