import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";


function App() {

  const mockProjectData = [ { title: "Project API 1", description: "Good project REST API", date: "2003-04-03", id: "1"},{ title: "Project API 2", description: "Good project REST API", date: "2003-04-03", id: "2"}]

  const [isAddedNewProject, setIsAddedNewProject] = useState(false);
  const [newProject, setNewProject] = useState({ 
    title: "",
    description: "",
    date: ""
  });
  const [projects, setProjects] = useState(mockProjectData)
  const [selectedProject, setSelectedProject] = useState(null)
  const [tasks, setTasks] = useState([])
  const [showTaskForm, setShowTaskForm ] = useState(false)
  const [currentTask, setCurrentTask] = useState()


  const handleClickAddProject = () => {
    setSelectedProject(false)
    setIsAddedNewProject(true);
  };

  const handleClickSaveProject = () => {
    const id = crypto.randomUUID();
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

  const handleClickDeleteProject = (id) => {
    const deletedProjectId = id

    const deletedProject = projects.filter( project => project.id !== deletedProjectId )
    setProjects([...deletedProject])
    setSelectedProject(null)

  }

  const handleClickShowProject = (e) => {
    const projectId = e.target.id
    const selectedProject = projects.find((project) => project.id === projectId)
    setIsAddedNewProject(false);
    setSelectedProject(selectedProject)
    setShowTaskForm(false)
  }

  const handleAddTask = (e, projectId) => {
    e.preventDefault()
    const taskId = crypto.randomUUID();

    setShowTaskForm(false)
    setTasks((prevTasks) => [...prevTasks, { id: taskId, text: currentTask, projectId}])

  }

  const handleShowTaskForm = () => {
    setShowTaskForm(true)
  }
  
  const handleOnChangeTaskInput = (task) => {
    setCurrentTask(task)
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar handleClickAddProject={handleClickAddProject} projects={projects} handleClickShowProject={handleClickShowProject} />
      <MainContent
        isAddedNewProject={isAddedNewProject}
        selectedProject={selectedProject}
        projects={projects}
        showTaskForm={showTaskForm}
        tasks={tasks}
        currentTask={currentTask}
        handleClickSaveProject={handleClickSaveProject}
        handleClickCancelProject={handleClickCancelProject}
        handleChangeInputsProject={handleChangeInputsProject}
        handleClickDeleteProject={handleClickDeleteProject}
        handleAddTask={handleAddTask}
        handleShowTaskForm={handleShowTaskForm}
        handleOnChangeTaskInput={handleOnChangeTaskInput}
      />
    </main>
  );
}

export default App;
