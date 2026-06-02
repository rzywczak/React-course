import React, { useState } from "react";
import Tasks from "./Tasks";
import { TaskForm } from "./TaskForm";

const ProjectDetails = ({ selectedProject, ...props }) => {
  const { title, description, date, id } = selectedProject;
  const { handleClickDeleteProject, handleAddTask, handleShowTaskForm, handleOnChangeTaskInput, showTaskForm, tasks } = props

  const currentProjectTasks = selectedProject ? tasks.filter(( task ) => Number(task.projectId) === Number(selectedProject.id)) : []

  return (
<div className="w-[50%] mt-16 mr-8">
  <div className="flex items-start justify-between">
    <h2 className="text-3xl font-bold text-stone-600 mb-2">
      {title}
    </h2>

    <button onClick={() => handleClickDeleteProject(id)} className="text-stone-600 hover:text-red-500">
      Delete
    </button>
  </div>

  <p className="mb-4 text-stone-400">
    {date}
  </p>

  <p className="text-stone-600 whitespace-pre-wrap">
    {description}
  </p>
  
  <hr className="my-4 border-stone-300" />
  <div className="flex items-start justify-between">
    <div></div>

    <button onClick={handleShowTaskForm} className="text-stone-600 hover:text-red-500">
      Add Task
    </button>
  </div>
  {showTaskForm ? <TaskForm projectId={id} handleAddTask={handleAddTask} handleOnChangeTaskInput={handleOnChangeTaskInput}/> : <Tasks tasks={currentProjectTasks} /> }
</div>
  );
};

export default ProjectDetails;
