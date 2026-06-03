const Tasks = ({ tasks }) => {
    return (
        <div className="mt-5 space-y-2">
            {tasks.map(({ text, id }) => (
                <div key={id} className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700">
                    {text}
                </div>
            ))}
        </div>
    );
};

export default Tasks;
