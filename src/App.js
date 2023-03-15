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
    body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} 
    removeTask={removeTask}
    />}
    extraHeaderContent=
    {<Buttons 
     tasks={tasks}
     hideDoneTasks={hideDoneTasks} 
     toggleHideDone={toggleHideDone} />}
    />
    
    </Conteiner>
  );
}



export default App;
