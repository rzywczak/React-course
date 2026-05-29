import React from "react";
import ProjectForm from "./ProjectForm";
import ProjectDetails from "./ProjectDetails";

const MainContent = ({ selectedProject, isAddedNewProject, ...props} ) => {
  return (
    <>
      {isAddedNewProject && <ProjectForm {...props} />}
      {selectedProject && <ProjectDetails selectedProject={selectedProject} />}
    </>
  );
};

export default MainContent;
