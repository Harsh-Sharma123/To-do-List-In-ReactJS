import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="my-3 bg-light p-3">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
