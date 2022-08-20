import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete,onToggle }) => {
  return (
    <div className={` over task ${ task.reminder ? 'remainder' : '' }`}  onDoubleClick={()=>onToggle(task.id)}>
      <h2 className="card">
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h2>
    </div>
  );
};

export default Task;
