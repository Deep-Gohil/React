import React from "react";

const TodoItem = ({
  task,
  date,
  isCompleted,
  id,
  onDelete,
  onStatusUpdate,
  onUpdate,
}) => {
  const handleUpdate = () => {
    onUpdate({ task, date, isCompleted, id });
  };

  return (
    <div>
      <h1>{task}</h1>
      <h5>due:{date}</h5>
      <button onClick={() => onStatusUpdate(id)}>
        {isCompleted ? "pending" : "complete"}
      </button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
