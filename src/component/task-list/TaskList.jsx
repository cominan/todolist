import { createContext, useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from "react-redux"
import useDebounce from "../../utils/useDebounce"
import { ContentTask } from "./content-task/ContentTask"
import { SearchTask } from "./search/SearchTask"
import styles from './task.module.css'
import { listTask } from "../../redux/features/stateSlice"


export const ValueListTask = createContext()

export const TaskList = () => {

  const List = useSelector(listTask)
  const [search, setSearch] = useState('')
  //sort task by date
  let initList = [...List]

  initList.length > 0 && initList.sort(function (a, b) {
    return new Date(a.calc) - new Date(b.calc)
  })

  const [values, setValues] = useState(initList)

  useEffect(() => {
    let initTask = [...List]
    initTask && initTask.sort(function (a, b) {
      return new Date(a.calc) - new Date(b.calc)
    })
    setValues(initTask)
  }, [List])
  //merge value context
  let value = {
    toast
  }
  //Custom search
  useDebounce(() => {
    setValues(
      values.filter(val => val.input.toLowerCase().includes(search.toLowerCase()))
    )
    if (search.length === 0) {
      let initTask = [...List]
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
        <SearchTask props={setSearch} list={List} />
        {
          List.length > 0 ?
            <div className={styles.display}>
              {
                values.map((prop, index) => {
                  return <div key={index}>
                    <ContentTask props={prop} />
                  </div>
                })
              }
            </div>
            :
            <h2 className={styles.comment}>Nothing here, you can  create a new task now !</h2>
        }
        <ToastContainer />
      </div>
    </ValueListTask.Provider>
  )
}
