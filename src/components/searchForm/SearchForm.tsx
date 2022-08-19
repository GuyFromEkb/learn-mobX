import { useState } from "react"
import { libraryStore } from "../store/libraryStore"

const SearchForm: React.FC = () => {
    const [input, setInput] = useState("")

    const onSearch = () => {
        libraryStore.fetchBooks(input)
    }

    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={onSearch}>Search Book</button>
        </>
    )
}

export default SearchForm