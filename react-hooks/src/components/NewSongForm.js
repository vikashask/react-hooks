import React, { useState } from "react";

const NewSongForm = ({addSong}) => {
  const [title, setTitle] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    console.log(title);
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>Song name:</label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="Add song" />
    </form>
  );
};

export default NewSongForm;
