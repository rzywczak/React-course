const Sidebar = ({ handleClickAddProject, projects, handleClickShowProject }) => {
    return (
        <>
            <aside className="w-full shrink-0 bg-zinc-950 px-5 py-6 text-zinc-50 shadow-xl shadow-zinc-950/10 md:min-h-screen md:w-80 md:px-6 md:py-10">
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">YOUR PROJECTS</p>
                <button
                    onClick={handleClickAddProject}
                    className="inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-950/20 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:text-base">
                    + Add Project
                </button>
                <div className="mt-8 space-y-2">
                    {projects.map(({ title, description, date, id }) => (
                        <button
                            key={id}
                            id={id}
                            onClick={(e) => handleClickShowProject(e)}
                            className="w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
                            {title}
                        </button>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
