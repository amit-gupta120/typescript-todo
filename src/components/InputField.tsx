import React from "react";
import "./styles.css";

interface Props {
  todo: String;
  setTodo: React.Dispatch<React.SetStateAction<String>>;
}
// console.log()

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter your task" className="inputBox" />
      <button className="inputAdd" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
