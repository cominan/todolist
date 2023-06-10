import styles from './action.module.css'


export const Action = ({ props, func, values }) => {
    const value = JSON.parse(localStorage.getItem('task'))
    const handleRemove = () => {
        let index = value.findIndex(val => val.input == props.input)
        if(index !== -1) {
            value.splice(index, 1)
            values.toast('Remove success')
            localStorage.setItem('task', JSON.stringify(value))
            values.func(true)
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
