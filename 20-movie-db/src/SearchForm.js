import React, { useRef, useState } from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error, setDate } = useGlobalContext();
  const [value, setValue] = useState("");
  const dateRef = useRef();

  const dateHandler = () => {
    setValue(dateRef.current.value);
    setDate(dateRef.current.value);
  };

  console.log("Search Form");

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text '
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        ref={dateRef}
        type='number'
        id='year'
        min='1900'
        max='2022'
        placeholder='enter year'
        className='form-input'
        value={value}
        onChange={dateHandler}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
