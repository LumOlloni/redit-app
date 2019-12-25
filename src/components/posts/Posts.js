import React, { Component } from "react";
import PostItem from "./PostItem";
import uuid from "uuid";

class Posts extends Component {
  render() {
    const object = Array.from(this.props.posts);
    return (
      <div style={postStyle}>
        {object.map(post => (
          <PostItem key={uuid.v4()} post={post} />
        ))}
      </div>
    );
  }
}

const postStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Posts;
