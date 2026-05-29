import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";


function App() {

  const mockProjectData = { title: "Project API", description: "Good project REST API", date: "2003-04-03", id: "1"}

  const [isAddedNewProject, setIsAddedNewProject] = useState(false);
  const [newProject, setNewProject] = useState({ 
    title: "",
    description: "",
    date: ""
  });
  const [projects, setProjects] = useState([mockProjectData])
  const [selectedProject, setSelectedProject] = useState(null)


  const handleClickAddProject = () => {
    setSelectedProject(false)
    setIsAddedNewProject(true);
  };

  const handleClickSaveProject = () => {
    const id = crypto.randomUUID();
    console.log(typeof id)
    setProjects([...projects, {...newProject, id }])
    setIsAddedNewProject(false);
  };

  const handleClickCancelProject = (e) => {
    e.preventDefault();
    setIsAddedNewProject(false);
  };

  const handleChangeInputsProject = (e) => {
    const inputValue = e.target.value
    const inputId = e.target.id

    setNewProject((prev) => ({...newProject, [inputId]: inputValue}))
  }

  const handleClickShowProject = (e) => {
    const projectId = e.target.id
    console.log(typeof projectId)
    const selectedProject = projects.find((project) => project.id === projectId)
    console.log(selectedProject)
    setIsAddedNewProject(false);
    setSelectedProject(selectedProject)
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClickAddProject={handleClickAddProject} projects={projects} handleClickShowProject={handleClickShowProject} />
      <MainContent
        isAddedNewProject={isAddedNewProject}
        selectedProject={selectedProject}
        handleClickSaveProject={handleClickSaveProject}
        handleClickCancelProject={handleClickCancelProject}
        handleChangeInputsProject={handleChangeInputsProject}
      />
    </main>
  );
}

export default App;
