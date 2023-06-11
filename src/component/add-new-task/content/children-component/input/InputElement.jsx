import { forwardRef } from 'react'
import styles from './input.module.css'



export const InputElement = forwardRef(function myInput(props, ref) {

  const { value, ...othersProp } = props

  return (
    <input {...othersProp} ref={ref} required autoFocus={value.input.length === 0 ? true : false}
      onChange={(e) => value.setInput(e.target.value)}
      value={value.input}
      className={styles.inputElement} placeholder='Add new tasks...'></input>
  )

})
