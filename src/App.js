import Form  from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Conteiner from "./Conteiner";
import { useEffect, useState } from "react";



function App() {

  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);
   

  const toggleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done};
      }

      return task;
    }))
  }
   
    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task,
        done: true,
      })))
    };

    const addNewTask = (content) => {
      setTasks(tasks => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]);
    };
 

  return (
    <Conteiner>
    <header>
      <h1>Lista zadań</h1>
    </header>
    <Section 
      title="Dodaj nowe zadanie" 
      body={<Form addNewTask={addNewTask} />} 
    />
    
    <Section 
    title="Lista Zadań"
    body={
    <Tasks 
      tasks={tasks} 
      hideDoneTasks={hideDoneTasks} 
      removeTask={removeTask}
      toggleTaskDone={toggleTaskDone}
    />}
    extraHeaderContent=
    {<Buttons 
     tasks={tasks}
     hideDoneTasks={hideDoneTasks} 
     toggleHideDone={toggleHideDone} 
     setAllDone={setAllDone}
      />}
    />
    
    </Conteiner>
  );
}



export default App;
