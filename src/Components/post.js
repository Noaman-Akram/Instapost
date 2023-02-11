import React, { Component } from "react";
import propTypes from "prop-types"


function Post(props){
    const post = props.post;
        return(
                <figure className="figure">
                    <img className="photo" src={post.imageLink}/>
                    <figcaption>{post.description}</figcaption>
                    <button className="button-container" onClick={()=>{
                        props.removePhoto(post)
                    }}>Remove</button>
                </figure>
        )
}


Post.propTypes = {
    post : propTypes.object.isRequired
}

export default Post; 