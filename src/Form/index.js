import { useState } from 'react';
import './stylee.css';

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");  

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
  };

  return (
    <form className="form"  onSubmit={onFormSubmit}>
    <input
      value={newTaskContent}
      className="form__input" autofocus 
       placeholder="co dziś robimy?"
       onChange={({target}) => setNewTaskContent(target.value)}
    />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);

};
export default Form;