import React from 'react'


function Todo({todo}) {
    const style = {
        display: 'inline'
    }
    return (
        <div>
            <h2 style={style}>{todo.title}_____{todo.body}</h2>
        </div>

    )
}

export default Todo