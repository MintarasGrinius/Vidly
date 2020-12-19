import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      onChange={(e) => onChange(e.currentTarget.value)}
      type="text"
      name="query"
      class="form-control m-3"
      value={value}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
