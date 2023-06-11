
import { InputElement } from './children-component/input/InputElement'
import { AreaElement } from './children-component/area/AreaElement'
import { CalenderElement } from './children-component/calender/CalenderElement'
import { PiorityElement } from './children-component/piority/PiorityElement'
import { useDispatch } from 'react-redux'
import styles from './content.module.css'
import { useContext, useRef } from 'react'
import { ValueContext } from '..'
import { addnewtask } from '../../../redux/features/stateSlice'


export const Content = () => {
  const value = useContext(ValueContext)
  const dispatch = useDispatch()

  let taskValue = {
    input: value.input,
    desc: value.desc,
    calc: value.calc,
    piority: value.piority
  }
  let currentDate = new Date().toDateInputValue()


  const ref = useRef(null)
  //click button Add 
  const handleSubmit = (e) => {
    e.preventDefault()
    let task = []
    if (value.input && value.desc) {
      task.push(taskValue)
      task = task.concat(JSON.parse(localStorage.getItem('task') || '[]'))
      dispatch(addnewtask(task))
      value.setInput('')
      value.setDesc('')
      value.setCalc(currentDate)
      value.setPiority('Normal')
      value.toast('Add success')
      ref.current && ref.current.focus()
    } else {
      alert('Please check the fields')
    }
  }


  return (
    <form className={styles.content}>
      <InputElement ref={ref} value={value} />
      <AreaElement />
      <div className={styles.selectContent}>
        <CalenderElement />
        <PiorityElement />
      </div>
      <button type='submit' onClick={handleSubmit} className={styles.buttonAdd}>Add</button>
    </form>
  )
}
