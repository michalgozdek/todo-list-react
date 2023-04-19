import { Switch, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (
  <Switch>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Switch>
);

export default Buttons;
