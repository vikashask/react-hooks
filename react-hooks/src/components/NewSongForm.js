import React, { useState } from "react";

const NewSongForm = () => {
  const [title, setTitle] = useState("");
  const handelSubmit = (e) => {
    e.preventdefault();
    console.log(title);
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>Song name:</label>
      <input type="text" required onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value="Add song" />
    </form>
  );
};

export default NewSongForm;
