import { observer } from "mobx-react-lite"
import { counterStore as counter } from "../../../store/counter"

const Counter = () => {

    return (
        <>
            <h1>counter: {counter.counter}</h1>
            <button onClick={() => counter.changeCounter(1)}>+</button>
            <button onClick={() => counter.changeCounter(-1)}>-</button>
            <button onClick={() => counter.resetCounter()}>reset</button>
        </>
    )
}

export default observer(Counter)