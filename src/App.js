import Form  from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Conteiner from "./Conteiner";

const tasks = [
  { id: 1, content: "test1", done: false},
  { id: 2, content: "test2", done: true},
];

const hideDoneTasks = false;

function App() {
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
    body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
    extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
    />
    
    </Conteiner>
  );
}



export default App;
