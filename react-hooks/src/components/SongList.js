import React, { useState,useEffect } from "react";
import NewSongForm from "./NewSongForm";
import {v1 as uuidv1} from 'uuid';
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "home", id: 1 },
    { title: "home2", id: 2 },
    { title: "home3", id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv1() }]);
    console.log(songs);
  };

  // this useeffect run only when songs chanes
  useEffect(()=>{
    console.log('use effect run ',songs);
  },[songs])

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  );
};

export default SongList;
