import { useState } from 'react'
import './App.css'
import { AddNewTask } from './component/add-new-task'
import { TaskList } from './component/task-list/TaskList'

function App() {

  const [load, setLoad] = useState(false)

  return (
    <div className=''>
      <div className=''>
        <AddNewTask func={setLoad} />
        <TaskList data={load} func={setLoad} />
      </div>
    </div>
  )
}

export default App
