import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

export default class Main extends Component {


  render() {
    return (
      <div>
        <h1>Redux Photo</h1>
        {cloneElement(this.props.children, this.props)}
      </div>
    )
  }

}
