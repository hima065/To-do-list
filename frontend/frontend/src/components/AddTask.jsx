import { useState } from "react";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      completed: false,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-task-section">
      <form onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        
        {error && <p style={{ color: "#c62828", marginBottom: "15px", fontWeight: 500 }}>{error}</p>}
        
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            id="title"
            type="text"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Add more details about your task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <button 
          className="submit-btn"
          type="submit" 
          disabled={!title.trim()}
        >
          ➕ Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;