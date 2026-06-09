export const Search = ({ query, onChange }) => {
  return (
    <div className="search-bar">
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
