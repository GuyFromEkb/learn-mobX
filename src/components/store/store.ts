import { makeAutoObservable } from "mobx"

class Counter {
    private _counter = 0

    get counter() {
        return this._counter
    }

    constructor() {
        makeAutoObservable(this)
    }

    changeCounter(changeValue: number) {
        this._counter += changeValue
    }
    resetCounter() {
        this._counter = 0
    }

}

export const counterStore = new Counter()