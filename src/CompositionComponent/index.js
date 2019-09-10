import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import AlbumCard from './NestedComponent/AlbumCard';
import AlbumCardComposition from './RefactoredComponent/AlbumCard';

function index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AlbumCard title="Component Composition" artist="artist" genres={['genres1', 'genres2']} songs={[{ title: 'songs1', songLength: '2 hrs' }, { title: 'songs2', songLength: '1 hrs' }]} />
      </header>
    </div>
  );
}

export default index;
