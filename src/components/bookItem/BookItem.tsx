import { FC } from 'react'
import './BookItem.scss'

export interface IBookItem {
    key: string,
    cover_i: number,
    author_name: string[],
    title: string
}

const BookItem: FC<IBookItem> = ({ author_name, cover_i, title }) => {
    return (
        <>
            <div className="book">
                <img className="book__img" src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt="book" ></img>
                <div className="book__name">{title}</div>
                <div className="book__author">{author_name}</div>
            </div>
        </>
    )
}

export default BookItem