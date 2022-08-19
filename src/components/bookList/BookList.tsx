import BookItem from "../bookItem/BookItem"
import searchBook from "../../api"
import { libraryStore } from "../store/libraryStore"
import { observer } from "mobx-react-lite"

const BookList = () => {

    const booksData = libraryStore.books.filter(item => item.cover_i)

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }} className="book-list">
            {
                booksData.map(item => <BookItem  {...item} />)
            }

        </div>
    )
}

export default observer(BookList)


