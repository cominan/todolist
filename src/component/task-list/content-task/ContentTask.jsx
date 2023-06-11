import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTask, updatetask } from '../../../redux/features/stateSlice'
import { ValueListTask } from '../TaskList'
import { Action } from './Action'
import { DetailTask } from './DetailTask'
import styles from './content.module.css'

export const ContentTask = ({ props }) => {

    const value = useContext(ValueListTask)
    const initValue = useSelector(listTask)

    const dispatch = useDispatch()

    const handleRemove = () => {
        //find id task remove and remove
        let index = initValue.findIndex(val => val.input == props.input)
        let newInit = [...initValue]
        if (index !== -1) {
            newInit.splice(index, 1)
            value.toast('Remove success')
            dispatch(updatetask(newInit))
        }
    }
    const [data, setData] = useState()
    const [check, setCheck] = useState(false)
    const [detail, setDetail] = useState(false)
    const [action, setAction] = useState()
    //click button Action
    const handleAction = () => {
        setAction(props)
        setCheck(!check)
    }
    //click button Detail
    const handleDetail = () => {
        setData(props)
        setDetail(!detail)
    }
    return (
        <div className={styles.border}>
            <div className={styles.content}>
                <div className={styles.context}>
                    <input type="checkbox" checked={check} onChange={handleAction} />
                    <p className={styles.paraph}>{props.input}</p>
                </div>
                <div>
                    <button
                        onClick={handleDetail}
                        className={styles.detail}>Detail</button>
                    <button
                        onClick={handleRemove}
                        className={styles.remove}>Remove</button>
                </div>
            </div>
            <div>
                {detail && <DetailTask datas={data} value={value} func={setData} />}
            </div>
            <div>
                {check && <Action props={action} values={value} func={setCheck} />}
            </div>
        </div>
    )
}
