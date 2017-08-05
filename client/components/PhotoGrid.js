import React, { Component } from 'react';

export default class PhotoGrid extends Component {


  render() {
    return (
      <div className="photo-grid">
        <pre>
          {JSON.stringify(this.props.posts, null, ' ')}
        </pre>
      </div>
    )
  }

}
