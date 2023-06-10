
import { Content } from './content/Content'
import { Header } from './header/Header'
import { ToastContainer, toast } from 'react-toastify';
import { createContext, useState } from 'react';

export const ValueContext = createContext()

export const AddNewTask = ({func}) => {

  Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toISOString().slice(0, 10);
  });

  let valueDate = new Date().toDateInputValue()
  let arrTask = []

  const [input, setInput] = useState('')
  const [desc, setDesc] = useState('')
  const [calc, setCalc] = useState(valueDate)
  const [piority, setPiority] = useState('Normal')

  let value = { input, setInput, desc, setDesc, calc, setCalc, piority, setPiority, arrTask, func, toast }
  return (
    <div>
      <Header />
      <ValueContext.Provider value={value}>
        <Content />
      </ValueContext.Provider>
      <ToastContainer />
    </div>
  )
}
