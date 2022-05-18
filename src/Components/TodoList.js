import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'

const Todolist = (props) => {
    
    return (
        <div className="todo-list">
        <Header title={props.title}/>
        <ul className="list-group list-group-flush">
            {props.items.map(item => (
            <li className="list-group-item">
                <TodoItem item={item}/>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default Todolist