import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {

    let myStyle = {
        minHeight : "70vh"
    }

    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3 py-2 bg-primary">Todos List</h3>
            {props.todos.length == 0? <h3 className="text-center my-3 py-3 bg-warning">"No Todo's to Display!"</h3> : 
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
            
            
        </div>
    )
}
