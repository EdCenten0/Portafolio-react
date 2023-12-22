import React from "react";

const Card = ({ title, description, imageURL, projectURL }) => {
  return (
    <div className=" h-80 w-64 rounded-lg border border-gray-500  flex flex-col gap-3 p-4">
      <div className=" rounded-lg">
        <a href={projectURL}>
          <img src={imageURL} alt={title} className="border border-gray-500" />
        </a>
      </div>
      <div>
        <h4 className=" font-semibold text-md">{title}</h4>
        <p className=" text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
