export const TaskForm = ({ handleAddTask, handleOnChangeTaskInput, handleClickCancelAddTask, projectId }) => {
    return (
        <form onSubmit={(e) => handleAddTask(e, projectId)} className="mt-5 rounded-md border border-zinc-200 bg-zinc-50 p-5">
            <div className="mb-5 flex flex-row gap-3 justify-end">
                <button type="button" onClick={handleClickCancelAddTask} className="rounded-md px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-white hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300">
                    Cancel
                </button>
                <button type="submit" className="rounded-md bg-zinc-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2">
                    Save
                </button>
            </div>
            <div className="flex flex-row gap-4 justify-start">
                <div className="flex w-full flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-zinc-500">TASK</label>
                    <input onChange={(e) => handleOnChangeTaskInput(e.target.value)} id="title" type="text" required className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
                </div>
            </div>
        </form>
    );
};
