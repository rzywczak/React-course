import React from "react";
import Tasks from "./Tasks";

const ProjectDetails = ({ selectedProject }) => {
  const { title, description, date } = selectedProject;
  return (
<div className="w-[50%] mt-16 mr-8">
  <div className="flex items-start justify-between">
    <h2 className="text-3xl font-bold text-stone-600 mb-2">
      {title}
    </h2>

    <button className="text-stone-600 hover:text-red-500">
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

  <Tasks />
</div>
  );
};

export default ProjectDetails;
