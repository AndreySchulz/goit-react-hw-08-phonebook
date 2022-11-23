import ContactsPage from 'pages/ContactsPage';
import Navigation from './Navigation/Navigation';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Container } from '@mui/material';

const MainLayout = () => {
  return (
    <>
      <Container fixed>
        <Navigation />
        <Outlet />
      </Container>
    </>
  );
};

export function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getCurrentUser());
  }, [dispath]);

  return isLoggedIn ? (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="contacts" element={<ContactsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="*" element={<Navigate to={'/login'} />} />
    </Routes>
  );
}
