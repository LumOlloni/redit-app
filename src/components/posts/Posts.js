import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <div style={postStyle}>
        {this.props.posts.map(post => (
          <div>{post.author}</div>
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
