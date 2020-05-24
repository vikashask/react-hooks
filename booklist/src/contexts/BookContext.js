import React, { createContext, useState } from "react";
import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Angular", author: "vikash", id: 1 },
    { title: "Node", author: "jay", id: 2 },
    { title: "React", author: "dev", id: 3 },
    { title: "Js", author: "dev d", id: 4 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv1() }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
