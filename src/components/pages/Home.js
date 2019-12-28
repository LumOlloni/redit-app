import React, { Component } from "react";
import Post from "../posts/Posts";
import axios from "axios";
import Pagination from "../posts/Pagination";

class Home extends Component {
  state = {
    posts: {},
    loading: false,
    currentPage: 1,
    postPerPage: 3
  };

  // Get Current posts
  async componentDidMount() {
    this.setState({ loading: true });

    const result = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/reactjs.json"
    );

    this.setState({ posts: result.data.data.children, loading: false });
  }

  render() {
    const postsArray = Array.from(this.state.posts);

    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const currentPost = postsArray.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => {
      this.setState({ currentPage: pageNumber });
    };

    return (
      <div>
        <div className='container'>
          <Post posts={currentPost} loading={this.state.loading} />

          <Pagination
            postPerPage={this.state.postPerPage}
            totalPosts={postsArray.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
}

export default Home;
