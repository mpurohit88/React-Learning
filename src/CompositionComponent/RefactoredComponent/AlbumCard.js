import React from 'react';

const AlbumCardComposition = ({ title, artist, genres, songs }) => {
  return (
    <Card title={`${title} Refactored`} >
      <h2>{artist}</h2>
      <ul>{genres.map(genre => <li>{genre}</li>)}</ul>
      <div>{songs.map(song => <SongCard {...song} />)}</div>
    </Card>
  )
}

const SongCard = props => {
  return (
    <Card title={props.title}>
      <p>{props.songLength}</p>
    </Card>
  )
}

// ✅ Now Card is reusable component
const Card = props => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="card-content">
        {props.children}
      </div>
    </div>
  )
}

export default AlbumCardComposition;