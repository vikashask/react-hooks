import React, { Component } from "react";
import { ThemeContex } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContex;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle theme</button>;
  }
}

export default ThemeToggle;
