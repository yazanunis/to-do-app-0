/* eslint-disable no-lone-blocks */
import { createContext, useState } from "react";

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([])
    const [doneTasks, setDoneTasks] = useState([])

    const deleteTask = item => {
        const tasks = task.filter(e => e.title !== item.title)
        {window.confirm("Are you sure ?") && setTask(tasks)}
    }

    const doneTask = item => {
        setDoneTasks([item, ...doneTasks])
    }

    const clear = () => {
        {window.confirm("Are you sure ?") && setDoneTasks([])}
    }

    const addTask = newTask => {
        setTask([newTask, ...task])
    }

    return (
        <TaskContext.Provider value={{
            task,
            doneTasks,
            addTask,
            doneTask,
            clear,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext