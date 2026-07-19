import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import api from "./services/api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks from backend on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get("");
      setTasks(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load tasks");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      setError("");
      const response = await api.post("", task);
      setTasks((prev) => [response.data, ...prev]);
    } catch (err) {
      setError("Failed to add task");
      console.error("Add error:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      setError("");
      await api.delete(`/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError("Failed to delete task");
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="app-container">
      <h1>TASKLIST</h1>

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-text">Loading your tasks...</p>}

      <AddTask onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;