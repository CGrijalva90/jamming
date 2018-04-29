import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'Money Trees',
          artist: 'Kendrick Lamar',
          album: 'Album Title',
          id: '1234'
        },

        {
          name: 'Reptilia',
          artist: 'The Stroks',
          album: 'Is This It',
          id: '234'
        }
      ],

      playlistName: 'Party Time',
      playlistTracks: [
        {
          name: 'Money Trees',
          artist: 'Kendrick Lamar',
          album: 'Album Title',
          id: '1234'
        },

        {
          name: 'Reptilia',
          artist: 'The Stroks',
          album: 'Is This It',
          id: '234'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (
      !this.state.playlistTracks.find(
        playlistTrack => playlistTrack.id === track.id
      )
    ) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(
        playlistTrack => playlistTrack.id !== track.id
      )
    });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    // Spotify.search(term).then(response => {
    //   console.log(response);
    // });
    console.log(Spotify.search(term));
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.props.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
