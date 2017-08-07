import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {


  render() {
    //index of post
    const i = this.props.posts.findIndex( posts => posts.code === this.props.params.postId);
    // get the post
    const post = this.props.posts[i];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments />
      </div>
    )
  }

}
