import React from "react";
import ProjectForm from "./ProjectForm";
import ProjectDetails from "./ProjectDetails";

const MainContent = ({ selectedProject, isAddedNewProject, ...props} ) => {
  const { projects } = props
  const projectCount = projects.length
  
  const showAddFirstProjectMessage = projectCount === 0 && !isAddedNewProject;
  const showSelectProjectMessage = projectCount > 0 && !selectedProject && !isAddedNewProject;
  const showProjectForm = isAddedNewProject;
  const showProjectDetails = projectCount > 0 && selectedProject;

  return (
    <>
      { showAddFirstProjectMessage  && <div>Add first project!</div>}
      { showSelectProjectMessage  && <div>Select project!</div>}
      { showProjectForm && <ProjectForm {...props} />}
      { showProjectDetails && <ProjectDetails selectedProject={selectedProject} {...props} />}
    </>
  );
};

export default MainContent;
