import { useContext } from 'react';
import styles from './calender.module.css'
import { ValueContext } from '../../..';


export const CalenderElement = () => {
  const value = useContext(ValueContext)

  return (
    <div>
      <p className={styles.dueDate}>
        <label htmlFor='dates'>
          Due Date
        </label>
      </p>
      <input
        required
        onChange={(e) => value.setCalc(e.target.value)}
        name='dates'
        id='dates'
        className={styles.calender}
        type='date' min={new Date().toDateInputValue()} defaultValue={new Date().toDateInputValue()}>
      </input>
    </div>
  )
}
