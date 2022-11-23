import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperation';
import { getUserEmail } from 'redux/auth/authSelectors';
import Button from '@mui/material/Button';

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      </ul>
      <div>
        <p>{userEmail}</p>
        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            dispatch(logOutUser());
          }}
        >
          logout
        </Button>
      </div>
    </>
  );
};
export default PrivateRoute;
