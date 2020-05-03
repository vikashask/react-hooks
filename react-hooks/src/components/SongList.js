import React, { useState } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "home", id: 1 },
    { title: "home2", id: 2 },
    { title: "home3", id: 3 },
  ]);

  const addSongs = () => {
    setSongs([...songs, { title: "new song", id: 4 }]);
    // setSongs([...songs, { title: "new song", id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSongs}>Add Song</button>
      <NewSongForm />
    </div>
  );
};

export default SongList;
