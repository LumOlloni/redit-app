import React, { useContext } from "react";
import PostItem from "./PostItem";
import uuid from "uuid";
import Spinner from "../layout/Spinner";
import RedditContext from "../../context/reddit/redditContext";

const SearchPost = () => {
  const redditContext = useContext(RedditContext);

  const { loading, posts } = redditContext;

  if (loading) {
    return <Spinner />;
  } else {
    const arrayOfPost = posts.data.children;
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
