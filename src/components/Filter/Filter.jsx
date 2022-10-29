const Filter = ({ inputValueForm, value }) => {
  return (
    <input onChange={inputValueForm} type="text" name="filter" value={value} />
  );
};

export default Filter;
