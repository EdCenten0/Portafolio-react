import React from "react";

const Card = ({ title, description, imageURL, projectURL }) => {
  return (
    <div
      style={{ backgroundColor: "#2a4b57", border: "1px solid #9494ba" }}
      className=" h-80 w-52 rounded-xl  flex flex-col gap-3 "
    >
      <div className="">
        <a href={projectURL}>
          <img
            src={imageURL}
            alt={title}
            style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
            className=" rounded-xl w-full h-28 object-cover"
          />
        </a>
      </div>
      <div className="p-4">
        <h4 style={{ color: "#7ee4e1" }} className=" font-semibold text-md">
          {title}
        </h4>
        <p style={{ color: "#7ee4e1" }} className=" text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
