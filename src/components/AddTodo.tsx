import React from 'react'

interface AddTodoProps{
    handleChange: HandleChange,
    newTodo: string,
    addTodo: AddTodo
}

const AddTodo:React.FC<AddTodoProps> =({handleChange, newTodo, addTodo})=> {
    return (
        <div>
            <input type="text" placeholder="Add todos" value={newTodo} onChange={handleChange}/>
            <button onClick={()=> addTodo(newTodo)}>Add Todo</button>
        </div>
    )
}

export default AddTodo