import { makeAutoObservable, autorun } from "mobx"

class Counter {

    counter = 0

    constructor() {
        makeAutoObservable(this)
    }

    changeCounter(changeValue) {
        this.counter += changeValue
    }
    resetCounter() {
        this.counter = 0
    }
}

export const counterStore = new Counter()

autorun(() => {
    console.log(counterStore.counter)
})