import React from "react";

const SearchFilterOptions = ({ onInputChange, className, ...props }) => {
  return (
    <input
      onChange={(e) => onInputChange(e.target.value.toLowerCase().trim())}
      type="text"
      className={`outline-none border-none rounded-none h-[35px] px-4 w-full ${className}`}
      {...props}
      placeholder="Search..."
    />
  );
};

export default SearchFilterOptions;
