import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";
import Card from "../../components/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsRef = collection(db, "projects");

    getDocs(projectsRef).then((resp) => {
      setProjects(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  console.log(projects);

  return (
    <>
      <MainPanel>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center w-full ">
          {projects.map((project) => (
            <Card
              title={project.title}
              description={project.description}
              imageURL={project.imageURL}
              projectURL={project.projectURL}
              key={project.id}
            />
          ))}
        </div>
      </MainPanel>
    </>
  );
};

export default Projects;
