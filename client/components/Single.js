import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {

  constructor(props) {
    super();
    console.log("Construstor");
    this.state = {
      added: 0
    }
    setTimeout(() => {
      this.setState({
        added: 1
      })
    }, 3000)
  }

  //before render
  componentWillMount(){
    console.log("COMP WILL MOUNT");
  }

  // immediately after render
  componentDidMount(){
    console.log("COMP DID MOUNT");
  }

  componentWillReceiveProps(nextProps){
    console.log("COMP WILL RECEIVE PROPS", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("SHOULD COMP UPDATE", nextProps, nextState);
    if (nextState.added === 1) {
      return false
    }
    return true
  }

  componentWillUpdate(nextProps, nextState){
    console.log("COMP WILL UPDATE", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(" COMP DID UPDATE", prevProps ,prevState);
  }

  componentWillUnmount(){
    console.log("COMP WILL UNMOUNT");
  }


  render() {
    // postId pulled from params
    const { postId } = this.props.params
    //index of post
    const i = this.props.posts.findIndex( posts => posts.code === postId);
    // get the post
    const post = this.props.posts[i];
    // get comments for post ; if there are none the or operator keeps it from erroring out
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments i={i} postComments={postComments} {...this.props}/>
      </div>
    )
  }

}
