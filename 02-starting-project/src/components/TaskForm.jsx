import React, { useState } from "react";

export const TaskForm = ({ handleAddTask, handleOnChangeTaskInput, projectId }) => {



  return (
    <form onSubmit={(e) => handleAddTask(e, projectId)} className="p-[25px] mt-[25px] border border-black">
      <div className="flex flex-row gap-4 justify-end">
        <button
        //   onClick={(e) => handleClickCancelProject(e)}
          className="text-stone-700 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </div>
      <div className="flex flex-row gap-4 justify-start">
        <div className="flex flex-col gap-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            TASK
          </label>
          <input
            onChange={(e) => handleOnChangeTaskInput(e.target.value)}
            id="title"
            type="text"
            required
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
        </div>
      </div>
    </form>
  );
};
