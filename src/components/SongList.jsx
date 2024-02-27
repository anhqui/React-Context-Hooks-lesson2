import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Like a Rolling Stone", id: 1 },
    { title: "My Heart Will Go On", id: 2 },
    { title: "Lemon Tree", id: 3 },
    { title: "My Love", id: 4 },
  ]);
  const addSong = () => {
    // const newSongs = songs.push({ title: "new song", id: 5 });
    // const newSongs = [...songs, { title: "new song", id: uuidv4() }];
    setSongs([...songs, { title: "new song", id: uuidv4() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
