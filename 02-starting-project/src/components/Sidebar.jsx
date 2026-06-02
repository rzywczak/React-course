const Sidebar = ({ handleClickAddProject, projects, handleClickShowProject }) => {
    return (
        <>
            <aside className="w-[35%] px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <p className="flex flex-col gap-1 my-4">YOUR PROJECTS</p>
                <button onClick={handleClickAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    + Add Project
                </button>
                <div className="mt-16">
                    {projects.map(({ title, description, date, id }) => (
                        <button
                            key={id}
                            id={id}
                            onClick={(e) => handleClickShowProject(e)}
                            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                            {title}
                        </button>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
