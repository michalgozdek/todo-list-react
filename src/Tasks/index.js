import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, removeTask,  toggleTaskDone }) => (
<ul className="tasks">
    {tasks.map(task => ( 
        <li
        key={task.id}
        className={`tasks__item ${task.done && hideDoneTasks ?
         "tasks__item--hidden" : ""} `}
         >
        <button className={`tasks__buttonDone `}
        onClick={() => toggleTaskDone(task.id)}
        >
        {task.done ? "✓" : ""}
        </button>
        <span className={`${task.done ? "tasks__contentDone" : ""}`}>
           {task.content}
        </span>
        <button className={`tasks__button-remove`}
         onClick={() => removeTask(task.id)}
        >
        🗑
        </button>
            
        </li>
    ))}
</ul>
);

export default Tasks;