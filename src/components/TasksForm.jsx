import { useContext } from "react"
import { useForm } from "react-hook-form"
import TaskContext from "./context/TaskContext"

const TasksForm = () => {
  const { addTask } = useContext(TaskContext)

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    if (data) {
      addTask(data)
      reset()
    }
  }

  return (
    <div className="container">
      <form className="m-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating m-2">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="title"
            {...register("title", { required: true })}
          />
          <label htmlFor="floatingTitle" className="text-secondary">
            Task Name
          </label>
        </div>
        <div className="form-floating m-2">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="title"
            {...register("text")}
          />
          <label htmlFor="floatingTitle" className="text-secondary">
            Description
          </label>
        </div>
        <button className="btn btn-primary m-2" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default TasksForm
