import { useState } from "react";
import { Field, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
  };

  return (
    <Field className="form" onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        autoFocus
        placeholder="co dziś robimy?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button className="form__button">Dodaj zadanie</Button>
    </Field>
  );
};
export default Form;
