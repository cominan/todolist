import { useState } from 'react'
import './App.css'
import { AddNewTask } from './component/add-new-task'
import { TaskList } from './component/task-list/TaskList'

function App() {
  //auto load UI when add task
  const [load, setLoad] = useState(false)
  //custom type date input
  Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toISOString().slice(0, 10);
  });


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
