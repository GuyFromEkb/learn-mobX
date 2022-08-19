import { makeAutoObservable, autorun } from "mobx"

class Todo {

    todosData = [

    ]


    constructor() {
        makeAutoObservable(this)
    }

    addTodo(title) {
        const newTodo = {
            id: Date.now(),
            userId: 5,
            title,
            completed: false
        }

        this.todosData.push(newTodo)
    }

    removeTodo(id) {
        this.todosData = this.todosData.filter(item => item.id !== id)
    }
    toggleTodo(id) {
        // console.log('zawel, id : ', id)
        this.todosData = this.todosData.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    }

    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => this.todosData.push(...data))
    }


}

export const todoStore = new Todo()

autorun(() => {
    console.log(todoStore.todosData)
})
/* {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
},
{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
},
{
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
}, */