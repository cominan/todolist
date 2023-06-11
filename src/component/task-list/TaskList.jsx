import { createContext, useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from "react-redux"
import useDebounce from "../../utils/useDebounce"
import { ContentTask } from "./content-task/ContentTask"
import { SearchTask } from "./search/SearchTask"
import styles from './task.module.css'
import { listTask } from "../../redux/features/stateSlice"


export const ValueListTask = createContext()

export const TaskList = ({ data, func }) => {

  const list = useSelector(listTask)
  const [search, setSearch] = useState('')
  let initList = [...list]
  initList.length > 0 && initList.sort(function (a, b) {
    return new Date(a.calc) - new Date(b.calc)
  })


  const [values, setValues] = useState(initList)

  useEffect(() => {
    let initTask = [...list]
    initTask && initTask.sort(function (a, b) {
      return new Date(a.calc) - new Date(b.calc)
    })
    setValues(initTask)
    func(false)
  }, [data])

  let value = {
    toast, data, func
  }


  useDebounce(() => {
    setValues(
      values.filter(val => val.input.toLowerCase().includes(search.toLowerCase()))
    )
    if (search.length === 0) {
      let initTask = [...list]
      initTask && initTask.sort(function (a, b) {
        return new Date(a.calc) - new Date(b.calc)
      })
      setValues(initTask)
    }
  }, [search], 400)

  return (
    <ValueListTask.Provider value={value}>
      <h2 className={styles.title}>Todolist</h2>
      <div className={styles.task}>
        <SearchTask props={setSearch} />
        <div className={styles.display}>
          {
            values && values.map((prop, index) => {
              return <div key={index}>
                <ContentTask props={prop} data={data} func={func} />
              </div>
            })
          }
        </div>
        <ToastContainer />
      </div>
    </ValueListTask.Provider>
  )
}
