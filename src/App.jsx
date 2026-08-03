import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

function App() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [darkMode, setDarkMode] = useState(true);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      priority: "Medium",
    };

    setTodos([newTask, ...todos]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTask = (id, value) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: value } : todo
      )
    );
  };

  const filteredTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    });

  return (

    <div className="app">

      <div className="container">
       
        <Header
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

   

        <Dashboard todos={todos} />

        <TodoForm
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />

      </div>

    </div>

  );
}


export default App;