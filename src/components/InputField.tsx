import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}
// console.log()

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your task"
        className="inputBox"
      />
      <button className="inputAdd" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
