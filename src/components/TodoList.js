import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const pendingTodo = [];
  const completedTodo = [];
  todos.forEach((item) => {
    if (item.isComplete === true) completedTodo.push(item);
    else pendingTodo.push(item);
  });

  return (
    <>
      <div className="todo-list">
        <h1 className="todolist-header">To do list</h1>
        <div className="show-filtres">
          <button className="show">All</button>
          <button className="show">Completed</button>
          <button className="show">Todo</button>
        </div>

        <div>
          {pendingTodo.length > 0 ? (
            pendingTodo.map((todo, index) => (
              <div className="todo-pending" key={index}>
                <TodoListItem
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  submitUpdate={submitUpdate}
                  edit={edit}
                  setEdit={setEdit}
                />
              </div>
            ))
          ) : (
            <p>Todo list is empty</p>
          )}
        </div>
        <div className="completed-tasks">
        <div>
        {completedTodo.length > 0 && (
          <div className="todo-list">
            <h4>Completed Tasks</h4>
            <hr />
          </div>
        )}

        
          {completedTodo.length > 0 &&
            completedTodo.map((todo, index) => (
              <div className="todo-completed" key={index}>
                <TodoListItem
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              </div>
            ))}
        </div>

        <div className="delete-filtres">
          <button className="delete" >Delete done tasks</button>
          <button className="delete">Delete all tasks</button>        
        </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
