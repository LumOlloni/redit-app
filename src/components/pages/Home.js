import React, { Component } from "react";
// import PostItem from "../posts/PostItem";
import Post from "../posts/Posts";
import axios from "axios";

class Home extends Component {
  state = {
    posts: {},
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const result = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/random.json"
    );

    this.setState({ posts: result.data, loading: false });
    console.log(result.data);
  }

  render() {
    // const { loading, posts } = this.state;
    return (
      <div>
        <div className='container'>
          <Post loading={this.state.loading} posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Home;
