import { useContext } from 'react'
import styles from './area.module.css'
import { ValueContext } from '../../..'


export const AreaElement = () => {
  const value = useContext(ValueContext)

  return (
    <>
      <p className={styles.label}><label htmlFor='area'>Description</label></p>
      <textarea required
        value={value.desc}
        onChange={(e) => value.setDesc(e.target.value)}
        className={styles.textArea} rows={8} id='area' name='area'></textarea>
    </>
  )
}
