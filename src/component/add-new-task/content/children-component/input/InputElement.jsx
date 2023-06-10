import { useContext } from 'react'
import { ValueContext } from '../../..'
import styles from './input.module.css'



export const InputElement = () => {
  const value = useContext(ValueContext)
  return (
    <input required autoFocus={value.input.length === 0 ? true : false} 
    onChange={(e) => value.setInput(e.target.value)} 
    value={value.input}
    className={styles.inputElement} placeholder='Add new tasks...'></input>
  )
}
