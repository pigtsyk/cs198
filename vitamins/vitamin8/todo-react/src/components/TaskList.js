import React from "react";

const TaskList = ({ todos, removeTodo, toggleTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={{
                        textDecoration:todo.completed ? "line-through" : "none",
                        color: todo.completed ? "red" : "black",
                    }}
                onClick={() => toggleTodo(todo.id)}
                >
                    {todo.text}
                    <button className="delBtn" onClick={(e) => {
                        // prevet triggering toggleTodo on button click
                        e.stopPropagation();
                        removeTodo(todo.id);
                    }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;