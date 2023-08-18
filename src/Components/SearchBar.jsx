const SearchBar = () => {
  return (
    <form className="search-bar">
      <label>
        {" "}
        Search Posts by location...
        <input className="" type="Cancel" placeholder="" aria-label="Cancel" />
      </label>
      <button className="btn-cancel" type="submit">
        Cancel
      </button>
    </form>
  );
};


export default SearchBar