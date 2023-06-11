import styles from './search.module.css'


export const SearchTask = ({ props }) => {
    const handleSearch = (e) => {
        props(e.target.value)
    }
    return (
        <input
            onChange={(e) => handleSearch(e)}
            placeholder="Search.." className={styles.search}>
        </input>
    )
}
