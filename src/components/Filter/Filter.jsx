import PropTypes from 'prop-types';

const Filter = ({ inputValueForm, value }) => {
  return (
    <input onChange={inputValueForm} type="text" name="filter" value={value} />
  );
};

export default Filter;

Filter.propTypes = {
  inputValueForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
