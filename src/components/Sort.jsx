export const Sort = ({ onChange, query }) => {
  return (
    <div className="sort-container">
      <select name="sort" onChange={onChange} value={query}>
        <option value="" hidden={true}>
          Sort by
        </option>
        <option value="name">Name</option>
        {/* <option value="lettuce">Lettuce</option>
        <option value="cheese">Cheese</option>
        <option value="vegies">Vegies</option>
        <option value="sauce">Sauce</option> */}
      </select>
    </div>
  );
};
