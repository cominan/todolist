import styles from './search.module.css'


export const SearchTask = ({ props, list }) => {
    const handleSearch = (e) => {
        props(e.target.value)
    }
    return (
        <input
            disabled={list.length > 0 ? false : true}
            onChange={(e) => handleSearch(e)}
            placeholder="Search.." className={styles.search}>
        </input>
    )
}
