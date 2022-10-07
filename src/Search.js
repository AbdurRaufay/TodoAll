import React from "react";

const Search = ({
  SearchTerm,
  setSearchTerm,
  getData,
  setSearch,
  setfilter,
}) => {
  return (
    <div>
      <div>
        <div class="d-flex mb-3">
          <input
            style={{ width: 400 }}
            type="search"
            placeholder="search ..."
            class="form-control"
            required
            value={SearchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          <button
            className="btn btn-primary"
            style={{
              marginLeft: 2,
              paddingLeft: 30,
              paddingTop: 10,
              paddingBottom: 10,
              paddingRight: 30,
            }}
            onClick={() => {
              getData(SearchTerm);
              setSearch(true);
              setfilter(false);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
