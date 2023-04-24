import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Conteiner from "./Conteiner";
import { useState } from "react";
import { useTasks } from "./Tasks/useTasks";

function App() {
  const [hideDoneTasks, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDoneTasks) => !hideDoneTasks);
  };

  const { tasks, removeTask, addNewTask, toggleTaskDone, setAllDone } =
    useTasks();

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
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Conteiner>
  );
}

export default App;
