const songs = [
  {
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    genre: "R&B",
    lenghtInSeconds: 250,
    publishingYear: 1982,
    wasItAHit: true,
  },

  {
    title: "Heaven and Hell",
    artist: "Black Sabbath",
    genre: "Heavy Metal",
    lenghtInSeconds: 380,
    publishingYear: 1980,
    wasItAHit: true,
  },

  {
    title: "Temple of Love",
    artist: "Sisters of Mercy",
    genre: "Rock",
    lenghtInSeconds: 210,
    publishingYear: 1983,
    wasItAHit: false,
  },

  {
    title: "Forward",
    artist: "Anaal Nathrakh",
    genre: "Black Metal",
    lenghtInSeconds: 240,
    publishingYear: 2018,
    wasItAHit: false,
  },

  {
    title: "Kickapoo",
    artist: "Tenacious D",
    genre: "Rock",
    lenghtInSeconds: 268,
    publishingYear: 2006,
    wasItAHit: true,
  },

  {
    title: "Brother, my cup is empty",
    artist: "Nick Cave & The Bad Seeds",
    genre: "Rock",
    lenghtInSeconds: 271,
    publishingYear: 1992,
    wasItAHit: false,
  },
];

const addSongToSongsArray = (newSong) => songs.push(newSong);

const newSong = {
  title: "My head is filled with music",
  artist: "The Real McKenzies",
  genre: "Punk",
  lenghtInSeconds: 231,
  publishingYear: 2012,
  wasItAHit: false,
};

addSongToSongsArray(newSong);
