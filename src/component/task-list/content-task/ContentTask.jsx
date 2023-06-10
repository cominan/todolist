import { ValueListTask } from '../TaskList'
import { Action } from './Action'
import styles from './content.module.css'
import { DetailTask } from './DetailTask'
import { useContext, useState } from 'react'

export const ContentTask = ({ props }) => {

    const value = useContext(ValueListTask)
    let initValue = value.props
    const handleRemove = () => {
        let index = initValue.findIndex(val => val.input == props.input)
        if (index !== -1) {
            initValue.splice(index, 1)
            value.toast('Remove success')
            localStorage.setItem('task', JSON.stringify(initValue))
            value.func(true)
        }
    }
    const [data, setData] = useState()
    const [check, setCheck] = useState(false)
    const [detail, setDetail] = useState(false)
    const [action, setAction] = useState()

    const handleAction = () => {
        setAction(props)
        setCheck(!check)
    }
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
                {check && <Action props={action} values={value} func={setCheck}/>}
            </div>
        </div>
    )
}
