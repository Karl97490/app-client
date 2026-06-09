export const Filter = ({ query, onChange }) => {
  return (
    <div className="filter-container">
      <select name="filter" onChange={onChange} value={query}>
        <option value="" hidden={true}>
          Filter by
        </option>
        <option value="meat">Meat</option>
        <option value="lettuce">Lettuce</option>
        <option value="cheese">Cheese</option>
        <option value="vegies">Vegies</option>
        <option value="sauce">Sauce</option>
      </select>
    </div>
  );
};
