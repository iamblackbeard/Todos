import React from "react";
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'


export default function Todos() {
    const todoList = useSelector(state => state.todos)

  return (
    <>
      <div className="flex flex-wrap gap-y-3">
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem key={todo.id} todo={todo} />
            </div>
          ))}
      </div>
    </>
  );
}
