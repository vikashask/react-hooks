import React, { useContext } from "react";
import { ThemeContex } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } =   useContext(ThemeContex);
  const {books} = useContext(BookContext)
  const theme = isLightTheme ? light : dark;

  return ( 
    <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          {books.map(book=>{
            return(<li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)
          })}
        </ul>
      </div>
   );
}
 
export default BookList;