import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <input
      onChange={e => dispatch(setFilter(e.target.value))}
      type="text"
      name="filter"
      value={value}
    />
  );
};

export default Filter;
