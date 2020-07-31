import '../css/style.css'
import React, {useState, useEffect} from 'react'
import Todo from './Todo'


function App() {    
    const [todos, setTodos] = useState([])

    const todos_url = 'http://127.0.0.1:8000/api/'

    useEffect(() => {
        fetch(todos_url)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    
    const todo_items = todos.map(item => <Todo key={item.id} todo={item}/>)

    return (
        <div>
            {todo_items}
        </div>
    )
}

export default App
