import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTask, updatetask } from '../../../redux/features/stateSlice'
import styles from './detailTask.module.css'


export const DetailTask = ({ datas, value, func }) => {

    const [input, setInput] = useState(datas.input)
    const [desc, setDesc] = useState(datas.desc)
    const [calc, setCalc] = useState(datas.calc)
    const [piority, setPiority] = useState(datas.piority)

    let initValue = useSelector(listTask)

    const dispatch = useDispatch()

    const handleUpdate = () => {
        //check change and update task
        if (input != datas.input || desc!= datas.desc || calc != datas.calc || piority != datas.piority) {
            let valueChange = {
                input, desc, calc, piority
            }
            let indexValueChange = initValue.findIndex(value => value.input == datas.input)
            let newInit = [...initValue]
            if (indexValueChange !== -1) {
                newInit[indexValueChange] = valueChange
                value.toast('Update success')
                dispatch(updatetask(newInit))
                func('')
            }
        } else {
            alert("If you don't change anything, please click the button Detail to back !")
        }
    }

    return (
        <>
            {
                datas ?
                    <div className={styles.content}>
                        <input required
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className={styles.detailInput} placeholder='Add new tasks...' />


                        <p className={styles.label}><label htmlFor='area'>Description</label></p>
                        <textarea required
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className={styles.textArea} rows={8} id='area' name='area' />


                        <div className={styles.selectContent}>
                            <div>
                                <p className={styles.dueDate}>
                                    <label htmlFor='dates'>
                                        Due Date
                                    </label>
                                </p>
                                <input
                                    required
                                    value={calc}
                                    onChange={(e) => setCalc(e.target.value)}
                                    name='dates'
                                    id='dates'
                                    className={styles.calender}
                                    type='date' min={new Date().toDateInputValue()} />

                            </div>
                            <div>
                                <p className={styles.descPio}>
                                    <label>Piority</label>
                                </p>
                                <select
                                    required
                                    value={piority}
                                    onChange={(e) => setPiority(e.target.value)}
                                    className={styles.piority}>
                                    <option value='Low'>Low</option>
                                    <option value='Normal'>Normal</option>
                                    <option value='High'>High</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleUpdate} className={styles.buttonAdd}>Update</button>

                    </div> :
                    ''
            }
        </>
    )
}
