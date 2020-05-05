import React, { useContext } from "react";
import { ThemeContex } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContex);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>React App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
