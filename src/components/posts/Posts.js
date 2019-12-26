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
      <div className='card-columns mt-2'>
        {object.map(post => (
          <PostItem key={uuid.v4()} post={post} />
        ))}
      </div>
    );
  }
};

export default Posts;
