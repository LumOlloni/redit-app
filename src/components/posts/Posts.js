import React from "react";
import PostItem from "./PostItem";
import uuid from "uuid";
import Spinner from "../layout/Spinner";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    const object = Array.from(posts);
    return (
      <div style={postStyle}>
        {object.map(post => (
          <PostItem key={uuid.v4()} post={post} />
        ))}
      </div>
    );
  }
};

const postStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Posts;
