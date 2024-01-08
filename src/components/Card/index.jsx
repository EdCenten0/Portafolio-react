import React from "react";
import "./index.css";

const Card = ({ title, description, imageURL, projectURL }) => {
  return (
    <div
      style={{ backgroundColor: "#1f1f3a", border: "1px solid #d2faf9" }}
      className="Card w-full h-auto rounded-xl  flex flex-col gap-3 "
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
        <h4 style={{ color: "#d2faf9" }} className=" font-semibold text-md">
          {title}
        </h4>
        <p style={{ color: "#d2faf9" }} className=" text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
