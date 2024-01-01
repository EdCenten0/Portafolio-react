import React from "react";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";

function Home() {
  return (
    <>
      <MainPanel>
        <div className="flex gap-10 items-center justify-start flex-col  lg:flex-row">
          <img
            src="https://avatars.githubusercontent.com/u/90741749?v=4"
            alt="avatar"
            className="rounded-full h-40 w-40 border border-gray-400"
          />
          <div>
            <h3 className=" text-xl font-bold pb-4">
              Carlos Eduardo Chavarria Centeno
            </h3>
            <p className=" font-medium">Computer Science student</p>
            <p className=" font-medium">Im currently learning by myself</p>
            <p className=" font-medium">
              Looking for opportunities for developing myself
            </p>
            <div className=" flex my-6 flex-wrap gap-2">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className=" text-xl font-bold pb-4">About</h3>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa
            esse, recusandae excepturi molestiae tempora? Cum esse assumenda,
            blanditiis ullam fugit voluptates repudiandae dolor nihil incidunt
            officiis porro, corrupti sapiente. Lorem ipsum dolor sit amet
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            quaerat in asperiores officiis, aliquam sunt, harum, placeat non
            nobis nulla obcaecati deserunt iure? Tempore odio earum tempora
            illo, accusamus eius?
          </p>

          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            debitis ea non aperiam itaque vitae numquam eveniet corporis id
            libero, eos alias aut temporibus dicta officia architecto fuga
            repellat voluptates. Lorem ipsum dolor sit amet consectetur,
          </p>
        </div>
      </MainPanel>
    </>
  );
}

export default Home;
