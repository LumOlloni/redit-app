import React, { useState } from "react";

const Search = ({ searchUsers }) => {
  const [text, setText] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [limit, setLimit] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    searchUsers(radioInput, text, limit);
    setRadioInput("");
    setText("");
    setLimit("");
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
                onChange={e => setRadioInput(e.target.value)}
                defaultChecked
              />
              Relevance
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
              <option value='100'>100</option>
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
    </div>
  );
};
export default Search;
