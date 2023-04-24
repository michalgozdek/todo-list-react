import { useState } from "react";
import { Field, Input, Button } from "./styled";
import { useRef } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <Field className="form" onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        placeholder="co dziś robimy?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </Field>
  );
};
export default Form;
