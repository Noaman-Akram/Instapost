import React, { Component } from "react";
import Post from "./post";
import propTypes from "prop-types"
import { Link } from "react-router-dom";
function Posts_Container(props) {
  return (
    <>
    <Link to ="/addPhoto"className=" addIcon"></Link>
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
