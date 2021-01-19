import React from 'react'

interface TodoListItemProps {
    todo:Todo,
    toggleTodo: ToggleTodo
}


const TodoListItem:React.FC<TodoListItemProps> = ({todo,toggleTodo}) => {
    return (
        <>
            <li style={todo.done ? {textDecoration:"line-through", color:"gray"}: {}}>
                <input type="checkbox" checked={todo.done} onChange={()=> toggleTodo(todo)}/>
                {todo.text}
            </li>
        </>
    )
}

export default TodoListItem;