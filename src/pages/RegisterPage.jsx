import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from 'redux/auth/authOperation';

const RegisterPage = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialValues);
  const dispatsh = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatsh(registerUser(form));
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            name="name"
            value={form.name}
            placeholder="input name"
            onChange={handleChange}
          ></input>
          name
        </label>
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
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};

export default RegisterPage;
