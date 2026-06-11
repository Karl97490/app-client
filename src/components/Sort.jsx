export const Sort = ({ onChange, query }) => {
  return (
    <select
      className="select w-fit"
      defaultValue=""
      name="sort"
      onChange={onChange}
      value={query}
    >
      <option hidden={true}>Sort by</option>
      <option value="name">Name</option>
      {/* <option>Crimson</option>
    <option>Amber</option>
    <option>Velvet</option> */}
    </select>
  );
};
