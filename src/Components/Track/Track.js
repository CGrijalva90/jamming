import React from 'react';
import './Track.css';

class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return  <a className="Track-action"> - </a>;
    } return  <a className="Track-action"> + </a>;
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}</p>
        </div>
        <a className="Track-action" />
      </div>
    );
  }
}

export default Track;
