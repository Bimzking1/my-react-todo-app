import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoItem from './TodoItem'

const Todolist = (props) => {
    
    return (
        <div className="todo-list">
            <Header title={props.title} addNewItem={props.addNewItem}/>
            <ul className="list-group list-group-flush">
                {props.items.map( item => (
                <li key={item.id} className="list-group-item">
                    <TodoItem item={item}/>
                </li>
                ))}
            </ul>
            <Footer count={props.items.length}/>
        </div>
    )
}

export default Todolist