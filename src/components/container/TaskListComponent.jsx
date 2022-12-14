import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    true,
    LEVELS.NORMAL
  );

  const changeState =(id)=>{
    console.log('TODO: Cambiar estado de una tarea')
  }

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskListComponent;
