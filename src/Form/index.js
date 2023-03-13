import './stylee.css';


const Form = () => (
    <form className="form">
    <input
      class="form__input" autofocus  placeholder="co dziś robimy?"
    />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);

export default Form;