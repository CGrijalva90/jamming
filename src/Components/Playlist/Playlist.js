import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <Tracklist />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
