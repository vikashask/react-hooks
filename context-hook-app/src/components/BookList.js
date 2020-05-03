import React, { Component,useContext } from "react";
import { ThemeContex } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } =   useContext(ThemeContex);
  const theme = isLightTheme ? light : dark;

  return ( 
    <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Angular</li>
          <li style={{ background: theme.ui }}>Node</li>
          <li style={{ background: theme.ui }}>React</li>
        </ul>
      </div>
   );
}
 
export default BookList;