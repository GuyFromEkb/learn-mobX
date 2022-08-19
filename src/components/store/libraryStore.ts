import { IBookItem } from './../bookItem/BookItem';
import searchBook from '../../api';
import { makeAutoObservable } from 'mobx';


class Library {

    books: IBookItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchBooks(stringSearch: string) {
        searchBook(stringSearch)
            .then(data => this.books = [...data])
            .catch(e => console.log("error", e))
    }
}

export const libraryStore = new Library();

