import { useContext } from "react"
import TaskContext from "./context/TaskContext"

const DoneTasks = () => {
  const { doneTasks, clear } = useContext(TaskContext)
  return (
    <div className="container">
      {doneTasks.map((e) => (
        <div>
          <h1>{e.title}</h1>
          <span className="badge bg-success">Done</span>
        </div>
      ))}
      {doneTasks && (
        <button className="btn btn-warning m-1" onClick={clear}>
          Clear
        </button>
      )}
    </div>
  )
}

export default DoneTasks
