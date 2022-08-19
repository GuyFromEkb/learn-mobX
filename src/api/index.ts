import axios from "axios"

import { IBookItem } from "../components/bookItem/BookItem"




const searchBook = async (searchRequest: string) => {

  try {

    const responce = await axios({
      url: "http://openlibrary.org/search.json",
      params: { q: `${searchRequest}` },
    })

    const data: IBookItem[] = responce.data.docs.map((item: IBookItem) => {
      const { key, author_name, cover_i, title } = item

      return {
        key,
        author_name,
        cover_i,
        title,
      }
    })
    return data

  } catch (error) {

    throw new Error("Fail to fetch")
  }

}

export default searchBook


