import React, { Fragment } from "react";
import noimage from "../../asset/NoImage.png";

const NoImage = () => (
  <Fragment>
    <img src={noimage} className='card-img-top img-fluid' alt='No Image' />
  </Fragment>
);

export default NoImage;
