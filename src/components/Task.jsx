const Task = ({ item, deleteTask }) => {
  return (
    <div className="col m-2 p-2">
      <h2 className="text-success">{item.title}</h2>
      <h4 className="text-secondary">{item.text}</h4>
      <button className="btn btn-danger" onClick={deleteTask}>
        X
      </button>
    </div>
  )
}

export default Task
