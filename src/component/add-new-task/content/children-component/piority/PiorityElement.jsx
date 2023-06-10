import { useContext } from 'react'
import styles from './piority.module.css'
import { ValueContext } from '../../..'


export const PiorityElement = () => {
  const value = useContext(ValueContext)


  return (
    <div>
      <p className={styles.descPio}>
        <label>Piority</label>
      </p>
      <select required defaultValue={'Normal'} onChange={(e) => value.setPiority(e.target.value)} className={styles.piority}>
        <option value='Low'>Low</option>
        <option value='Normal'>Normal</option>
        <option value='High'>High</option>
      </select>
    </div>
  )
}
