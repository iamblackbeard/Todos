import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../store/todoSlice'

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch()

  const add = (e) => {
    e.preventDefault();
    if (!todoText) return;
    dispatch(addTodo({text :todoText}));
    setTodoText("");
  };

  return (
    <div className="mb-4">
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
