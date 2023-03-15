import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
<ul className="tasks">
    {tasks.map(task => ( 
        <li
        className={`tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""} `}>
        <button className={`tasks__buttonDone `}>
        
        {task.done ? "✓" : ""}
        </button>
        <span className={`${task.done ? "tasks__contentDone" : ""}`}>
        {task.content}
        </span>
        <button className={`tasks__button-remove`}>
        🗑
        </button>
            
        </li>
    ))}
</ul>
);

export default Tasks;