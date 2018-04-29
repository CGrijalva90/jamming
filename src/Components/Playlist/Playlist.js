import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
        <Tracklist
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE PLAYLIST</a>
      </div>
    );
  }
}

export default Playlist;
