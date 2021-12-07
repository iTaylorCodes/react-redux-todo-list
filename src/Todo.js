import { useState } from "react";

const Todo = ({ task, updateTodo, deleteTodo, id }) => {
  const [editingTask, setEditingTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const handleRemove = () => {
    deleteTodo(id);
  };

  const toggleEdit = () => {
    setIsEditing((e) => !e);
  };

  const handleChange = (e) => {
    setEditingTask(e.target.value);
  };

  const stopEditing = (e) => {
    e.preventDefault();
    updateTodo(id, task);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <form onSubmit={stopEditing}>
          <input type="text" value={editingTask} onChange={handleChange} />
          <button>Stop Editing</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleRemove}>X</button>
      <li>{editingTask}</li>
    </div>
  );
};

export default Todo;
