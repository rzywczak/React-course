const Tasks = ({ tasks }) => {
    return (
        <div>
            {tasks.map(({ text, id }) => (
                <div key={id}>{text}</div>
            ))}
        </div>
    );
};

export default Tasks;
