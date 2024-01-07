import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";
import Card from "../../components/Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const filterProjects = (items, filter) => {
    const filteredItems = items.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredItems;
  };

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

  useEffect(() => {
    setFilteredProjects(filterProjects(projects, searchBarValue));
  }, [searchBarValue, projects]);

  const renderView = () => {
    if (filteredProjects.length > 0) {
      return (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center w-full ">
            {filteredProjects.map((project) => (
              <Card
                title={project.title}
                description={project.description}
                imageURL={project.imageURL}
                projectURL={project.projectURL}
                key={project.id}
              />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <>
      <MainPanel>
        <input
          className=" w-full p-3 mb-8  border border-gray-300 rounded-md text-teal-900"
          type="text"
          placeholder="Search for a project"
          onChange={(e) => {
            setSearchBarValue(e.target.value);
          }}
        />
        {renderView()}
      </MainPanel>
    </>
  );
};

export default Projects;
