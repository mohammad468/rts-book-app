import { ReactNode, useState } from "react";
import { books as bookData } from "../constants/mockData";
import Book from "./Book";
import Side from "./Side";
import Search from "./Search";
import { BookDataType } from "../types/BookDataType";

import styles from "./Books.module.css";

function Books(): ReactNode {
  const [books, setBooks] = useState(bookData);
  const [likedList, setLikedList] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (book: BookDataType, status: boolean) => {
    if (status) {
      setLikedList([...likedList, book]);
    } else {
      const newLikedList = likedList.filter((item) => item.id !== book.id);
      setLikedList(newLikedList);
    }
  };

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((item: BookDataType) =>
        item.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} searchHandler={searchHandler} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book: BookDataType) => (
            <Book data={book} key={book.id} handleLikedList={handleLikedList} />
          ))}
        </div>
        {!!likedList.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
            {likedList.map((likedBook) => (
              <Side key={likedBook.id} data={likedBook} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
