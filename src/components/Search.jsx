export const Search = ({ query, onChange }) => {
  return (
    <div className="search-bar">
      <span>Search</span>
      <input
        type="search"
        placeholder="Looking for..."
        name="search"
        value={query}
        onChange={onChange}
      />
    </div>
  );
};
