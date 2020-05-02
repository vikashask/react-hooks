import React, { createContext, Component } from "react";

export const ThemeContex = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      <ThemeContex.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContex.Provider>
    );
  }
}

export default ThemeContextProvider;
