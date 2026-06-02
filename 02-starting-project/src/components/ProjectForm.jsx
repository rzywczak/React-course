const ProjectForm = ({ handleClickSaveProject, handleClickCancelProject, handleChangeInputsProject }) => {
    return (
        <form onSubmit={handleClickSaveProject} className="w-[50%]">
            <h2 className="text-xl font-bold text-stone-500 my-4">Add Project</h2>
            <div className="flex flex-row gap-4 justify-end">
                <button onClick={(e) => handleClickCancelProject(e)} className="text-stone-700 hover:text-stone-950">
                    Cancel
                </button>
                <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                    Save
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
                <input onChange={(e) => handleChangeInputsProject(e)} id="title" type="text" required className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            </div>
            <div className="flex flex-col gap-4">
                <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
                <input onChange={(e) => handleChangeInputsProject(e)} id="description" type="text" required className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            </div>
            <div className="flex flex-col gap-4">
                <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
                <input onChange={(e) => handleChangeInputsProject(e)} id="date" type="date" required className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            </div>
        </form>
    );
};

export default ProjectForm;
