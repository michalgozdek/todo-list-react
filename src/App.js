import Form  from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Conteiner from "./Conteiner";
import { useState } from "react";



function App() {

  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "test1", done: false},
      { id: 2, content: "test2", done: true},
    ]
    
  );

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
 

  return (
    <Conteiner>
    <header>
      <h1>Lista zadań</h1>
    </header>
    <Section 
      title="Dodaj nowe zadanie" 
      body={<Form />} 
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
