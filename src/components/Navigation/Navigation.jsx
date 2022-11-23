import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <PrivateRoute /> : <PublicRoute />;
};
export default Navigation;
