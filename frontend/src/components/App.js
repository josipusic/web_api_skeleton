import React from 'react'
import '../css/style.css'
import TodoItem from './TodoItem'
import todosData from '../data/todosData'

// function App() {
//     const todoItems = todosData.map(todo => <TodoItem key={todo.id} data={todo}/>)
//     return (
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     )
// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return{...todo,
                    completed: !todo.completed
                }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = todosData.map(todo => <TodoItem handleChange={this.handleChange} key={todo.id} data={todo}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

// class App extends React.Component {
//     constructor() {
//         super()

//     }

//     render() {
//         return(
//             <div>
//                 <img onMouseOver={() => {console.log('yesyees')}} src="https://www.fillmurray.com/200/100"/>
//                 <br/>
//                 <br/>
//                 <button onClick={() => {console.log('auau')}}>Dissy</button>
//             </div>
//         )
//     }
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 2
//             }
//         })
//     }

//     render () {
//         return(
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.handleClick}>Increase</button>
//             </div>
//         )
//     }
// }

export default App