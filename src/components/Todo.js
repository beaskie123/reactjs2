import React, { useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
    const [state, setState] = useState({
        todo:'',
        todolist: []
    })
    const [edit, setEdit] = useState ({
        editTodo: '',
        editIndex: ''
    })

    const [isUpdate, setIsUpdate] = useState(false)

    const {todo, todolist} = state
    const {editTodo , editIndex } = edit

    const handleOnChangeEdit = (e) => {
        const {name , value} = e.target

        setEdit({...edit, [name]: value})
    }

    const handleOnclickEdit = (index,value) => {
        setIsUpdate(true)
        setEdit({editTodo: value, editIndex: index})
    }

    const handleOnclickcancel = () => {
        setIsUpdate(false)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
    
        setState({ ...state, [name]: value })
      }


    const createTodo = () => {
        const list = todolist
        
        if (todo === ''){
            window.alert("invalid value")
        }
        else {
        list.push(todo)
        setState({todo: '', todolist: list}) }
    }

    // Delete
    const deleteTodo = (index) => {
        const list = todolist
        list.splice(index,1)

        setState({todo:'', todolist:list})
    }

    // UPdate
    const updateTodo = (index) => {
        const list = todolist
        if(editTodo===''){
            window.alert("Invalid value")
        }
        else {
        list[index] = editTodo

        setState({...state, todolist:list})
        setIsUpdate(false)
        setEdit({editTodo: '', editIndex: ''})}
    }

    return (
        <>
        <div className='todo-main'>
            <div className='form-wrapper'>
                <input 
                type="text" 
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
                     todolist.length ?
                        todolist.map((value, index) => (
                            <TodoItem
                             key={index}
                             index ={index}
                             value={value}
                             deleteTodo={deleteTodo}
                             handleOnclickEdit={handleOnclickEdit}
                             />
                        )) : <span>No records found! </span>
                        }
                        {
                        isUpdate ?
                        <div className='form-wrapper2'>
                            <span>Index: {editIndex}</span>
                            <input
                            type="text"
                            name="editTodo"
                            placeholder='Update Todo'
                            value={editTodo}
                            onChange={handleOnChangeEdit}
                            />
                            <button onClick={() => updateTodo(editIndex)}>Update</button>
                            <button onClick={handleOnclickcancel}>Cancel</button>
                            </div> : ''
                } 
            </div>
        </div>
        </>
    )
}

export default Todo