const songs = [
  {
    id: 1,
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    genre: "R&B",
    lenghtInSeconds: 250,
    publishingYear: 1982,
    wasItAHit: true,
  },

  {
    id: 2,
    title: "Heaven and Hell",
    artist: "Black Sabbath",
    genre: "Heavy Metal",
    lenghtInSeconds: 380,
    publishingYear: 1980,
    wasItAHit: true,
  },

  {
    id: 3,
    title: "Temple of Love",
    artist: "Sisters of Mercy",
    genre: "Rock",
    lenghtInSeconds: 210,
    publishingYear: 1983,
    wasItAHit: false,
  },

  {
    id: 4,
    title: "Forward",
    artist: "Anaal Nathrakh",
    genre: "Black Metal",
    lenghtInSeconds: 240,
    publishingYear: 2018,
    wasItAHit: false,
  },

  {
    id: 5,
    title: "Kickapoo",
    artist: "Tenacious D",
    genre: "Rock",
    lenghtInSeconds: 268,
    publishingYear: 2006,
    wasItAHit: true,
  },

  {
    id: 6,
    title: "Brother, my cup is empty",
    artist: "Nick Cave & The Bad Seeds",
    genre: "Rock",
    lenghtInSeconds: 271,
    publishingYear: 1992,
    wasItAHit: false,
  },
];

const addSongToSongsArray = (newSong) => {
  songs.push(newSong);
  return songs;
};

const newSong = {
  id: 7,
  title: "My head is filled with music",
  artist: "The Real McKenzies",
  genre: "Punk",
  lenghtInSeconds: 231,
  publishingYear: 2012,
  wasItAHit: false,
};

const deleteSongByTitle = (title) => {
  songToDelete = songs.find(
    (song) => song.title.toLowerCase === title.toLowerCase
  );

  let songToDeletePosition = songs.indexOf(songToDelete);

  songs.splice(songToDeletePosition, 1);

  return songs;
};

const getFullSong = (title) => {
  const fullSong = songs.find(
    (song) => song.title.toLowerCase() === title.toLowerCase()
  );

  let fullSongPosition = songs.indexOf(fullSong);

  return songs[fullSongPosition];
};

const getSongsByGenre = (songs, genre) => {
  const filteredSongs = songs.filter(
    (song) => song.genre.toLowerCase() === genre.toLowerCase()
  );

  return filteredSongs;
};

const getHitSongs = (songs) => {
  const hitSongs = songs.filter((song) => song.wasItAHit === true);

  return hitSongs;
};
