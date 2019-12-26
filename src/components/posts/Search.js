import React from "react";

const Search = () => {
  return (
    <div className='container'>
      <div className='card card-body bg-light mb-2'>
        <h4>Search Reddit</h4>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control mb-3'
              placeholder='Search Term...'
            />
          </div>
          <div className='form-check form-check-inline'>
            Sort By:
            <input
              className='form-check-input ml-2'
              type='radio'
              value='relevance'
              defaultChecked
            />
            <label className='form-check-label'>Relevance</label>
          </div>
          <div className='form-check form-check-inline'>
            <input className='form-check-input' type='radio' value='new' />
            <label className='form-check-label'>Latest</label>
          </div>
          <h5 className='mt-2'>Limit: </h5>
          <div className='form-group'>
            <select className='form-control'>
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
