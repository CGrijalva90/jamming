import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track
          track={track}
          key={track.id}
          isRemoval={this.props.isRemoval}
          onRemove={this.props.onRemove}
          onAdd={this.props.onAdd}
          />)}
      </div>
    );
  }
}

export default Tracklist;
