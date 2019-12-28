import React from "react";
import PostItem from "./PostItem";
import uuid from "uuid";
import Spinner from "../layout/Spinner";

const SearchPost = ({ posts, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    const arrayOfPost = posts.post.data.children;
    return (
      <div className='card-columns mt-2'>
        {arrayOfPost.map(post => (
          <PostItem key={uuid.v4()} post={post} />
        ))}
      </div>
    );
  }
};

export default SearchPost;
