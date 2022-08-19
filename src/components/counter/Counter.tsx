import { observer } from "mobx-react"
import { counterStore } from "../store/store"

const Counter: React.FC = () => {
    return (
        <>
            <h1>counter: {counterStore.counter}</h1>
            <button onClick={() => { counterStore.changeCounter(1) }}>+</button>
            <button onClick={() => { counterStore.changeCounter(-1) }}>-</button>
            <button onClick={() => { counterStore.resetCounter() }}>reset</button>
            //
            <button onClick={() => {  }}>test</button>
        </>
    )
}

export default observer(Counter)