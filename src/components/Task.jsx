const Task = ({ item, deleteTask, editTask }) => {
  return (
    <div className="col m-2 p-2">
      <h2 className="text-dark">{item.title}</h2>
      <h4 className="text-info">{item.text}</h4>
      <button className="btn btn-success" onClick={editTask}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteTask}>
        delete
      </button>
    </div>
  )
}

export default Task
