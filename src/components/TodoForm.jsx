import { FaPlus } from "react-icons/fa";

const TodoForm = ({ task, setTask, addTask }) => {
  return (
    <div className="todoForm">

      <input
        type="text"
        placeholder="What do you need to do today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />

      <button onClick={addTask}>
        <FaPlus />
        <span>Add Task</span>
      </button>

    </div>
  );
};

export default TodoForm;