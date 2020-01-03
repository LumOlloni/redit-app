import React from "react";

const PostItem = ({ post }) => {
  const { data } = post;
  const {
    selftext,
    author_fullname,
    title,
    url,
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

  const truncate = (string, no_word) => {
    return string
      .split(" ")
      .splice(0, no_word)
      .join(" ");
  };

  return (
    <div style={{ marginBottom: "25px" }} className='card  style-card'>
      <div className='card-block'>
        <img
          alt='SubReddit Img'
          className='card-img-top img-fluid'
          style={{ width: "24rem", height: "14rem" }}
          src={image}
        />
        <h4 className='card-title'>
          {title.length > 0 ? truncate(title, 12) : "No Tittle "}
        </h4>
        <p className='card-text'>{truncate(selftext, 12)}</p>
        <p className='card-text'>Author: {author_fullname}</p>
        <p className='badge badge-primary'>Awards:{total_awards_received}</p>
        <p className='badge badge-warning'>Score:{score}</p>
      </div>
      <div className='col text-center'>
        <a
          style={{ color: "white" }}
          target='_blank'
          href={url}
          className='btn  page-footer '
        >
          Read More
        </a>
      </div>
      {/*  */}
    </div>
  );
};

export default PostItem;
