import { TaskProvider } from './components/context/TaskContext'
import Header from './components/Header'
import TasksForm from './components/TasksForm'
import TasksList from './components/TasksList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import NotFound from './components/NotFound'
import DoneTasks from './components/DoneTasks'

const App = () => {
  return (
    <div>
      <TaskProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <TasksForm />
                <TasksList />
              </>
            } />
            <Route path='/about' element={<About />} />
            <Route path='/done' element={<DoneTasks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TaskProvider>
    </div>
  )
}

export default App