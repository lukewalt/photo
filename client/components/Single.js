import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {


  render() {
    // postId pulled from params
    const { postId } = this.props.params
    //index of post
    const i = this.props.posts.findIndex( posts => posts.code === postId);
    // get the post
    const post = this.props.posts[i];
    // get comments for post ; allows looping over no comments and push one for the first time
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments i={i} postComments={postComments} {...this.props}/>
      </div>
    )
  }

}
