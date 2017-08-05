import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

export default class Main extends Component {


  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Redux Photo</Link>
        </h1>
        {cloneElement(this.props.children, this.props)}
      </div>
    )
  }

}
