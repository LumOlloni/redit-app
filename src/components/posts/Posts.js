import React, { Component } from "react";

class Posts extends Component {
  render() {
    return <div style={postStyle}></div>;
  }
}

const postStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Posts;
