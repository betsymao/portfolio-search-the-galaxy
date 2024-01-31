function Search({ onChange, query, error }) {
    return (
      <>
        <form className="search">

          <div className="search__formGroup">
            <label className="search__formLabel">
              Search the NASA Image Library:
            </label>

            <input 
              type="text" 
              className="search__formInput" 
              placeholder="e.g. Monkey Baker"
              onChange={ onChange }
              value={ query } 
              />
          </div>

          {/* display error */}
          <p className="search__error">
            {error ? error : ''}
          </p>

        </form>
      </>
    );
  }
  
  export default Search;