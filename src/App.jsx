import './App.css';
import { AddNewTask } from './component/add-new-task';
import { TaskList } from './component/task-list/TaskList';

function App() {
  
  Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toISOString().slice(0, 10);
  });

console.log("test part 7 set up CI/CD")
  return (
    <div>
      <div>
        <AddNewTask  />
        <TaskList />
      </div>
    </div>
  )
}

export default App
