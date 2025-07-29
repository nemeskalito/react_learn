import { memo } from "react";

const SearchInput = ({ setText }) => {
  console.log("Search")
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return <input onChange={handleChange} type="text" />;
};

export default memo(SearchInput);
