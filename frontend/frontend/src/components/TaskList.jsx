function TaskList({ tasks, deleteTask }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="tasks-section">
        <h2>Tasks</h2>
        <div className="no-tasks">
          <p>🎉 No tasks yet! Add one to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tasks-section">
      <h2>Tasks ({tasks.length})</h2>

      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div className="task-title">
            {task.completed ? "✅" : "⭕"} {task.title}
          </div>

          {task.description && (
            <div className="task-description">{task.description}</div>
          )}

          <div className="task-status">
            <strong>Status:</strong>
            <span className={`status-badge ${task.completed ? 'status-completed' : 'status-pending'}`}>
              {task.completed ? "✓ Completed" : "⏳ Pending"}
            </span>
          </div>

          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;