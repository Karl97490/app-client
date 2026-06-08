export const Filter = ({ queryFilter, onChange }) => {
  return (
    <div className="filter-container">
      <select name="filter" onChange={onChange}>
        <option value="" hidden={true}>
          Filter by
        </option>
        <option value="cheese">Cheese</option>
        <option value="vegies">Vegies</option>
      </select>
    </div>
  );
};
