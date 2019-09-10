import React from 'react';

const AlbumCard = props => {
  return (
    <div className="card">
      <AlbumInfo {...props} />
    </div>
  )
}

const AlbumInfo = ({ title, artist, genres, songs }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{artist}</h2>
      <ul>{genres.map(genre => <li>{genre}</li>)}</ul>
      <SongContainer songs={songs} />
    </div>
  )
}

const SongContainer = props => {
  return (
    <div>
      {props.songs.map(song => <SongCard {...song} />)}
    </div>
  )
}

const SongCard = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.songLength}</p>
    </div>
  )
}

export default AlbumCard;