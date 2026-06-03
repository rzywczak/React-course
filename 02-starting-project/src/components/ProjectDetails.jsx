import Tasks from './Tasks';
import { TaskForm } from './TaskForm';

const ProjectDetails = ({ selectedProject, ...props }) => {
    const { title, description, date, id } = selectedProject;
    const { handleClickDeleteProject, handleAddTask, handleShowTaskForm, handleOnChangeTaskInput, handleClickCancelAddTask, showTaskForm, tasks } = props;

    const currentProjectTasks = selectedProject ? tasks.filter((task) => task.projectId === selectedProject.id) : [];

    return (
        <div className="w-full max-w-4xl rounded-lg border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start justify-between gap-4">
                <h2 className="mb-2 text-3xl font-bold text-zinc-950">{title}</h2>

                <button onClick={() => handleClickDeleteProject(id)} className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200">
                    Delete
                </button>
            </div>

            <p className="mb-5 text-sm font-medium text-zinc-400">{date}</p>

            <p className="whitespace-pre-wrap leading-7 text-zinc-700">{description}</p>

            <hr className="my-8 border-zinc-200" />
            <div className="flex items-center justify-between">
                <div></div>

                <button onClick={handleShowTaskForm} className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-950/10 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2">
                    Add Task
                </button>
            </div>
            {showTaskForm ? (
                <TaskForm projectId={id} handleAddTask={handleAddTask} handleOnChangeTaskInput={handleOnChangeTaskInput} handleClickCancelAddTask={handleClickCancelAddTask} />
            ) : (
                <Tasks tasks={currentProjectTasks} />
            )}
        </div>
    );
};

export default ProjectDetails;
