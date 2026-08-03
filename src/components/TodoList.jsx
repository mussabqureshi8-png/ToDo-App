import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  deleteTask,
  toggleComplete,
  editTask,
}) => {
  if (todos.length === 0) {
    return (
      <div className="empty">

        <h2>No Tasks Found 😔</h2>

        <p>Add your first task to get started.</p>

      </div>
    );
  }

  return (
    <div className="todoList">

      {todos.map((todo) => (

        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />

      ))}

    </div>
  );
};

export default TodoList;