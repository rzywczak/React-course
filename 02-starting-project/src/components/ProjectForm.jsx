const ProjectForm = ({ handleClickSaveProject, handleClickCancelProject, handleChangeInputsProject }) => {
    return (
        <form onSubmit={(e) => handleClickSaveProject(e)} className="w-full max-w-3xl rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-zinc-950">Add Project</h2>
            <div className="mb-8 flex flex-row gap-3 justify-end">
                <button onClick={(e) => handleClickCancelProject(e)} className="rounded-md px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">
                    Cancel
                </button>
                <button type="submit" className="rounded-md bg-zinc-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2">
                    Save
                </button>
            </div>
            <div className="mb-5 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wide text-zinc-500">TITLE</label>
                <input onChange={(e) => handleChangeInputsProject(e)} id="title" type="text" required className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
            </div>
            <div className="mb-5 flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wide text-zinc-500">DESCRIPTION</label>
                <input onChange={(e) => handleChangeInputsProject(e)} id="description" type="text" required className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wide text-zinc-500">DUE DATE</label>
                <input onChange={(e) => handleChangeInputsProject(e)} id="date" type="date" required className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-zinc-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
            </div>
        </form>
    );
};

export default ProjectForm;
