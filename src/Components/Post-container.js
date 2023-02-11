import React, { Component } from "react";
import Post from "./post";
import propTypes from "prop-types"
function Posts_Container(props) {
  return (
    <>
    <button onClick={props.navigate} className="button-container addIcon">+</button>
    <div className="photoGrid">
      {props.posts.map((post, i) => (
        <Post key={i} post={post} removePhoto = {props.removePhoto}/>
      ))}
    </div>
    </>
  );
}

Posts_Container.propTypes = {
  posts: propTypes.array.isRequired,
  removePhoto: propTypes.func.isRequired

}
export default Posts_Container;
