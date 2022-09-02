import searchContext from "../contexts/searchContext";
import { useContext } from "react";
const Search = ({ placeholder }) => {
  const { search, setSearch } = useContext(searchContext);
  console.log(search);
  return (
    <div className="mt-6">
      <p className="text-primary-text mb-4">Search</p>
      <input
        className="p-2 border w-full md:w-[600px] sm:w-[450px] border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
