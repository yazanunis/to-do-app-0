import Task from "./Task"
import { useContext } from "react"
import TaskContext from "./context/TaskContext"

const TasksList = () => {
  const { task, deleteTask } = useContext(TaskContext)
  return (
    <div className="container">
      <div className="row">
        {task.map((item) => (
          <Task item={item} deleteTask={() => deleteTask(item)} />
        ))}
      </div>
    </div>
  )
}

export default TasksList
