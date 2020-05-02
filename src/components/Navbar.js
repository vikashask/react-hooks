import React, { Component } from "react";
import { ThemeContex } from "../contexts/ThemeContext";
class Navbar extends Component {
  static contextType = ThemeContex;

  render() {
    console.log(this.context);

    return (
      <ThemeContex.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = this.context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>React App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContex.Consumer>
    );
  }
}

export default Navbar;
