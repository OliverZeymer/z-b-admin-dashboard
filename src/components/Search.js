const Search = ({ placeholder }) => {
  return (
    <div>
      <h2>Search</h2>
      <input
        className="p-2 border border-gray-500 outline-none rounded-[3px] bg-white"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
