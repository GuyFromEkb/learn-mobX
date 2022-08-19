import { observer } from "mobx-react-lite"
import { useState } from "react"
import { todoStore as todo} from "../../../store/todo"

const Todo = () => {
    return (
        <>
            <h1>TODO:</h1>
            <TodoForm />
            <TodoList />
        </>
    )
}

export default Todo

const TodoForm = () => {

    const [input, setInput] = useState("")

    return (
        <>

            <button onClick={() => todo.fetchTodo()}>fetch</button>
            <br />
            {/*             <button onClick={() => console.log(todo.todosData[1])}>test2</button>
            <br /> */}

            <input value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => todo.addTodo(input)} >addTODO</button>
        </>
    )
}

const TodoList = observer(() => {

    const todoData = todo.todosData

    return (
        <>
            <div style={{ marginTop: "20px" }} className="todo-list">
                {
                    todoData.map(item => <TodoItem key={item.id} {...item} />)
                }
            </div>

        </>
    )
})

const TodoItem = ({ id, title, completed }) => {

    return (

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }} >
            <input type="checkbox" checked={completed} onChange={() => todo.toggleTodo(id)} />
            <div>{title}</div>
            <button onClick={() => todo.removeTodo(id)} >X</button>
        </div>

    )
}
