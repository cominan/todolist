import { createContext, useContext, useEffect, useState } from "react"
import { ContentTask } from "./content-task/ContentTask"
import { SearchTask } from "./search/SearchTask"
import styles from './task.module.css'
import useDebounce from "../../utils/useDebounce"
import { ToastContainer, toast } from 'react-toastify';

export const ValueListTask = createContext()

export const TaskList = ({ data, func }) => {

  const [search, setSearch] = useState('')

  let props = JSON.parse(localStorage.getItem('task') || '[]')
  props && props.sort(function (a, b) {
    return new Date(a.calc) - new Date(b.calc)
  })


  const [values, setValues] = useState(props)

  useEffect(() => {
    props = JSON.parse(localStorage.getItem('task'))
    props && props.sort(function (a, b) {
      return new Date(a.calc) - new Date(b.calc)
    })
    setValues(props)
    func(false)
  }, [data])

  let value = {
    setSearch, props, toast, data, func
  }


  useDebounce(() => {
    setValues(
      values.filter(val => val.input.toLowerCase().includes(search.toLowerCase()))
    )
    if (search.length === 0) {
      setValues(props)
    }
  }, [search], 400)


  return (
    <ValueListTask.Provider value={value}>
      <h2 className={styles.title}>Todolist</h2>
      <div className={styles.task}>
        <SearchTask />
        <div className={styles.display}>
          {
            values && values.map((prop, index) => {
              return <div key={index}>
                <ContentTask props={prop} />
              </div>
            })
          }
        </div>
        <ToastContainer />
      </div>
    </ValueListTask.Provider>
  )
}
