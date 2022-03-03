import React, { useState } from 'react'

const Todo = () => {
    const [state, setState] = useState({
        todo:'',
        todolist: []
    })
    
    const {todo, todolist} = state
    
    const handleOnChange = (e) => {
        const {name , value} = e.target

        setState({...state, [name]: value})
        console.log("state", state)
    }

    const createTodo = () => {
        const list = todolist //current
        list.push(todo)

        setState({...state, todolist: list})
        console.log(todolist.length)
    }

    return (
        <>
        <div className='todo-main'>
            <div className='form-wrapper'>
                <input type="text" 
                name="todo"
                placeholder='Create todoList' 
                value={todo}
                onChange={handleOnChange}
                />
                <button onClick={createTodo}>ADD</button>
            </div>
            <div className='table-main'>
                <div className='header-wrapper'>
                    <span>TO DO</span>
                    <span> ACTIONS</span>
                </div>
                {
                    todolist.lenght > 0 ?
                    todolist.map((value, index) => {
                         return (
                            <div key={index} className='row-wrapper'>
                            <span>{value}</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                         )
                     }) : <span>{todolist.length}</span>
                } 
            </div>
        </div>
        </>
    )
}

export default Todo