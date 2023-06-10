import { useContext } from 'react'
import styles from './search.module.css'
import { ValueListTask } from '../TaskList'
export const SearchTask = () => {
    const value = useContext(ValueListTask)
    const setSearch = value && value.setSearch
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <input
            onChange={(e) => handleSearch(e)}
            placeholder="Search.." className={styles.search}>
        </input>
    )
}
