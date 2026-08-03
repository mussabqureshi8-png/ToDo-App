import { useState } from "react";

import {
  FaTrash,
  FaEdit,
  FaSave,
  FaCheckCircle,
} from "react-icons/fa";

const TodoItem = ({
  todo,
  deleteTask,
  toggleComplete,
  editTask,
}) => {

  const [editing, setEditing] = useState(false);

  const [value, setValue] = useState(todo.text);

  const saveTask = () => {

    if (!value.trim()) return;

    editTask(todo.id, value);

    setEditing(false);

  };

  return (

    <div className={`todoCard ${todo.completed ? "completed" : ""}`}>

      <div className="left">

        <button
          className="checkBtn"
          onClick={() => toggleComplete(todo.id)}
        >

          <FaCheckCircle />

        </button>

        {
          editing ? (

            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

          ) : (

            <h3>{todo.text}</h3>

          )
        }

      </div>

      <div className="actions">

        {
          editing ? (

            <button
              className="save"
              onClick={saveTask}
            >
              <FaSave />
            </button>

          ) : (

            <button
              className="edit"
              onClick={() => setEditing(true)}
            >
              <FaEdit />
            </button>

          )
        }

        <button
          className="delete"
          onClick={() => deleteTask(todo.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>

  );

};

export default TodoItem;