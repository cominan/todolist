import { createSlice } from '@reduxjs/toolkit'

export const useReducer = createSlice({
    name: 'todolist',
    initialState: {
        value: []
    },

    reducers: {
        addnewtask: (state, action) => {
          state.value.push(...action.payload)
        },
        updatetask : (state, action) => {
            state.value = action.payload
        }
    },
})

export const { addnewtask, updatetask } = useReducer.actions


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const listTask = (state) => state.value

export default useReducer.reducer
