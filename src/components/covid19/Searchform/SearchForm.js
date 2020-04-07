import React from "react";

const SearchForm = ({ getQueryonSubmit, }) => {
  return (
    <>
      <form className="form" onSubmit={getQueryonSubmit}>
        <input 
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search in country"
        />
      </form>
    </>
  );
};
export default SearchForm;
