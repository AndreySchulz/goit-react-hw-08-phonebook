import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <>
      <input
        onChange={e => dispatch(setFilter(e.target.value))}
        type="text"
        name="filter"
        value={value}
        placeholder="search contact"
      />
    </>
  );
};

export default Filter;
