import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => {    

    
    return (
        <>
            {todos.map( (todo) => <TodoItem  todo={todo} key={todo.id}  onDeleteTodo={onDeleteTodo} 
          onUpdateTodo={onUpdateTodo} />)}
        </>
    )
}

export default TodoList;