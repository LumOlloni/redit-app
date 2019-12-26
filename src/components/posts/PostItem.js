import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const { data } = this.props.post;
    const {
      selftext,
      author_fullname,
      title,
      thumbnail,
      total_awards_received,
      score,
      preview
    } = data;

    const reditDefaultPicture =
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/reddit-796x397.png";

    const image = preview
      ? thumbnail.length > 5
        ? thumbnail
        : reditDefaultPicture
      : reditDefaultPicture;

    console.log(image);

    const truncate = (string, no_word) => {
      return string
        .split(" ")
        .splice(0, no_word)
        .join(" ");
    };

    return (
      <div style={{ marginBottom: "25px" }} className='card '>
        <div className='card-block'>
          <img
            alt='SubReddit Img'
            className='card-img-top img-fluid'
            src={image}
          />
          <h4 className='card-title'>
            {title.length > 0 ? title : "No Tittle "}
          </h4>
          <p className='card-text'>{truncate(selftext, 12)}</p>
          <p className='card-text'>
            Author: <legend>{author_fullname}</legend>
          </p>
          <p className='badge badge-primary'>Awards:{total_awards_received}</p>
          <p className='badge badge-warning'>Score:{score}</p>
        </div>
      </div>
    );
  }
}

export default PostItem;
