import { useDispatch, useSelector } from 'react-redux'
import { listTask, updatetask } from '../../../redux/features/stateSlice'
import styles from './action.module.css'


export const Action = ({ props, func, values }) => {

    const initValue = useSelector(listTask)
    const dispatch = useDispatch()
    //find index task and remove task
    const handleRemove = () => {
        let index = initValue.findIndex(val => val.input == props.input)
        if (index !== -1) {
            let newInit = [...initValue]
            newInit.splice(index, 1)
            values.toast('Remove success')
            dispatch(updatetask(newInit))
            func(false)
        }
    }
    return (
        <>
            {
                props ?
                    <div className={styles.position}>
                        <p>Bulk Action:</p>
                        <div>
                            <button
                                onClick={() => func(false)}
                                className={styles.detail}>Done</button>
                            <button
                                onClick={handleRemove}
                                className={styles.remove}>Remove</button>
                        </div>
                    </div>
                    : ''
            }
        </>
    )
}
