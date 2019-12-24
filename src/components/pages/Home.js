import React, { Component } from "react";
import PostItem from "../posts/PostItem";

class Home extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <PostItem />
        </div>
      </div>
    );
  }
}

export default Home;
