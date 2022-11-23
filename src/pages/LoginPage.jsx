import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUser } from 'redux/auth/authOperation';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialValues);
  const dispath = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispath(logInUser(form));
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            name="email"
            value={form.email}
            placeholder="input email"
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="password">
          <input
            name="password"
            value={form.password}
            placeholder="input password"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </>
  );
};

export default LoginPage;
