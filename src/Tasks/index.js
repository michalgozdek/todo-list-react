import "./style.css";

const Tasks = (props) => (
<ul className="tasks">
    {props.tasks.map(task => ( 
        <li
        className={`tasks__item ${task.done && props.hideDoneTasks ? "tasks__item--hidden" : ""} `}>
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