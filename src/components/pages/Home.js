import React, { useState, useEffect } from "react";
import Post from "../posts/Posts";
import axios from "axios";
import Pagination from "../posts/Pagination";

const Home = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const postsArray = Array.from(posts);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = postsArray.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/reactjs.json"
      );

      setPosts(result.data.data.children);
      setLoading(false);
    };
    fetchData();
  }, []);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='container'>
        <Post posts={currentPost} loading={loading} />
        <Pagination
          postPerPage={postPerPage}
          totalPosts={postsArray.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;
