import React, { useContext } from "react";
import { ThemeContex } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContex)
  return ( <button onClick={toggleTheme}>Toggle theme</button> );
}

export default ThemeToggle;
