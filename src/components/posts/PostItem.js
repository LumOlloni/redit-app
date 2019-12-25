import React, { Component } from "react";
import NoImage from "../layout/NoImage";

class PostItem extends Component {
  render() {
    const { data } = this.props.post;
    const { selftext, author_fullname, title, thumbnail, preview } = data;

    console.log(preview);

    const truncate = (string, no_word) => {
      return string
        .split(" ")
        .splice(0, no_word)
        .join(" ");
    };
    return (
      // <div className='container'>
      <div className='row'>
        <div className='col-md-4 mt-2'>
          <div style={{ width: "18rem" }} className='card'>
            <div className='card-block'>
              <img
                className='card-img-top img-fluid'
                src={thumbnail.length > 0 ? thumbnail : <NoImage />}
              />
              <h4 className='card-title'>
                {title.length > 0 ? title : "No Tittle "}
              </h4>
              <p className='card-text'>{truncate(selftext, 12)}</p>
              <p className='card-text'>
                Author: <legend>{author_fullname}</legend>
              </p>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default PostItem;
