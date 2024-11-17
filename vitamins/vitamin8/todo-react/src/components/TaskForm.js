import React, { useState } from "react";

const TaskForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const handleAddTodo = () => {
        if (text.trim() !== "") {
            addTodo({
                id: new Date().getTime(),
                text,
                completed: false,
            });
            // clear input field after adding task
            setText("");
        }
    };
    
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button className="addBtn" onClick={handleAddTodo}>Add Task</button>
        </div>
    );
};

export default TaskForm;