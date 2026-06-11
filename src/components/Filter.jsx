export const Filter = ({ query, onChange }) => {
  return (
    <select
      className="select w-fit"
      defaultValue=""
      name="filter"
      onChange={onChange}
      value={query}
    >
      <option hidden={true}>Filter by</option>
      <option value="meat">Meat</option>
      <option value="lettuce">Lettuce</option>
      <option value="cheese">Cheese</option>
      <option value="vegies">Vegies</option>
      <option value="sauce">Sauce</option>
    </select>
  );
};

{
  /* <select
  className="select"
  defaultValue=""
  name="filter"
  onChange={onChange}
  value={query}
>
  <option disabled={true}>Filter by</option>
  <option value="meat">Meat</option>
  <option value="lettuce">Lettuce</option>
  <option value="cheese">Cheese</option>
  <option value="vegies">Vegies</option>
  <option value="sauce">Sauce</option>
</select>; */
}
