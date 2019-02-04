import React from 'react';

const SearchForm = ({onSubmit, onChange, value}) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        placeholder="Search by Title, Author, or Subject" 
        className="form-control border-success mb-2"
        type="text"
        onChange={onChange}
        value={value}
        name="searchTerm"
      />
      <button className="btn btn-block btn-outline-dark" onClick={onSubmit}>
        Search
      </button>
    </form>
  )
}

export default SearchForm;