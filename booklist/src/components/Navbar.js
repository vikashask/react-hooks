import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div>
      <h1>Reading List </h1>
      <p>currently you have {books.length}</p>
    </div>
  );
};

export default NavBar;
