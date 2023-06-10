
import { InputElement } from './children-component/input/InputElement'
import { AreaElement } from './children-component/area/AreaElement'
import { CalenderElement } from './children-component/calender/CalenderElement'
import { PiorityElement } from './children-component/piority/PiorityElement'
import styles from './content.module.css'
import { useContext } from 'react'
import { ValueContext } from '..'


export const Content = () => {
  const value = useContext(ValueContext)

  let taskValue = {
    input: value.input,
    desc: value.desc,
    calc: value.calc,
    piority: value.piority
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let task = []
    if (value.input && value.desc) {
      task.push(taskValue)
      task = task.concat(JSON.parse(localStorage.getItem('task') || '[]'))
      localStorage.setItem('task', JSON.stringify(task))
      value.setInput('')
      value.setDesc('')
      value.setCalc(new Date().toDateInputValue())
      value.setPiority('')
      value.toast('Add success')
      value.func(true)
    } else {
      alert('Please check the fields')
    }
  }

  return (
    <form className={styles.content}>
      <InputElement />
      <AreaElement />
      <div className={styles.selectContent}>
        <CalenderElement />
        <PiorityElement />
      </div>
      <button type='submit' onClick={handleSubmit} className={styles.buttonAdd}>Add</button>
    </form>
  )
}
