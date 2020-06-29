import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                onChange={() => {props.handleChange(props.item.id)}}
                type="checkbox"
                checked={props.data.completed}
            />
            <p>{props.data.text}</p>
        </div>
    )
}

export default TodoItem