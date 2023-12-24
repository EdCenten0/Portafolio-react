import React from "react";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";
import Card from "../../components/Card";

const Projects = () => {
  return (
    <>
      <MainPanel>
        <div className="grid grid-cols-4 gap-6 justify-items-center w-full ">
          <Card
            imageURL={
              "https://github.com/EdCenten0/Imgs/raw/master/Vite%20E-commerce/Desktop1.jpeg"
            }
            projectURL={"https://github.com/EdCenten0/Vite-E-commerce"}
            title={"Vite E-commerce"}
            description={
              "This is a small personal project that has been develop using Vite and React.js, it has been stylized using TaildWind CSS."
            }
          />
          <Card
            imageURL={
              "https://github.com/EdCenten0/Imgs/raw/master/Vite%20E-commerce/Desktop1.jpeg"
            }
            projectURL={"https://github.com/EdCenten0/Vite-E-commerce"}
            title={"Vite E-commerce"}
            description={
              "This is a small personal project that has been develop using Vite and React.js, it has been stylized using TaildWind CSS."
            }
          />
          <Card
            imageURL={
              "https://github.com/EdCenten0/Imgs/raw/master/Vite%20E-commerce/Desktop1.jpeg"
            }
            projectURL={"https://github.com/EdCenten0/Vite-E-commerce"}
            title={"Vite E-commerce"}
            description={
              "This is a small personal project that has been develop using Vite and React.js, it has been stylized using TaildWind CSS."
            }
          />
          <Card
            imageURL={
              "https://github.com/EdCenten0/Imgs/raw/master/Vite%20E-commerce/Desktop1.jpeg"
            }
            projectURL={"https://github.com/EdCenten0/Vite-E-commerce"}
            title={"Vite E-commerce"}
            description={
              "This is a small personal project that has been develop using Vite and React.js, it has been stylized using TaildWind CSS."
            }
          />
          <Card
            imageURL={
              "https://github.com/EdCenten0/Imgs/raw/master/Vite%20E-commerce/Desktop1.jpeg"
            }
            projectURL={"https://github.com/EdCenten0/Vite-E-commerce"}
            title={"Vite E-commerce"}
            description={
              "This is a small personal project that has been develop using Vite and React.js, it has been stylized using TaildWind CSS."
            }
          />
        </div>
      </MainPanel>
    </>
  );
};

export default Projects;
