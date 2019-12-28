import React, { useState } from "react";
import SearchPost from "./SearchPost";

import axios from "axios";

const Search = () => {
  const [text, setText] = useState("");
  const [radioInput, setRadioInput] = useState("Relevance");
  const [limit, setLimit] = useState("5");
  const [post, setPost] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = e => {
    setText(e.target.value);
  };

  const searchPost = async (radioInput, text, limit) => {
    setLoading(true);

    const res = await axios.get(
      `http://www.reddit.com/search.json?q=${text}&sort=${radioInput}&limit=${limit}`
    );

    setPost({ post: res.data });
    setLoading(false);
  };

  const onSubmit = e => {
    e.preventDefault();

    searchPost(radioInput, text, limit);
    setIsSubmitted(true);
    setText("");

    console.log(post);
  };

  return (
    <div className='container mt-3'>
      <div className='card card-body bg-light mb-2 '>
        <h4>Search Reddit</h4>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='text'
              className='form-control mb-3'
              placeholder='Search Term...'
              value={text}
              onChange={onChange}
            />
          </div>
          <div className='form-check form-check-inline'>
            Sort By:
            <label className='form-check-label'>
              <input
                className='form-check-input ml-2'
                type='radio'
                name='radio'
                value='Relevance'
                onClick={e => setRadioInput(e.target.value)}
                defaultChecked
              />
              Rerlevance
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <label className='form-check-label'>
              <input
                type='radio'
                className='form-check-input'
                name='radio'
                value='Latest'
                onChange={e => setRadioInput(e.target.value)}
              />
              Latest
            </label>
          </div>
          <h5 className='mt-2'>Limit: </h5>
          <div className='form-group'>
            <select
              onChange={e => setLimit(e.target.value)}
              className='form-control'
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </select>
          </div>
          <button
            type='submit'
            className='btn page-footer text-white btn-block mt-4'
          >
            Search
          </button>
        </form>
      </div>
      {isSubmitted && <SearchPost posts={post} loading={loading} />}
    </div>
  );
};
export default Search;
