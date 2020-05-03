import React, { Component } from "react";
import { ThemeContex } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContex;

  render() {
    const { isLightTheme, light, dark } = this.context;
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
}

export default BookList;
