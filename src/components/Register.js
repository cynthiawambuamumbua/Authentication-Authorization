import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [message, setMessage] = useState(null);

  const { name, email, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res.data);
      setMessage('Registration successful');
      setFormData({ 
        name: '',
        email: '',
        password: '',
        role: 'student',
      });
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      setMessage('Registration failed'); 
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {message && <p>{message}</p>}
      <input type="text" name="name" value={name} onChange={onChange} required placeholder="Name" />
      <input type="email" name="email" value={email} onChange={onChange} required placeholder="Email" />
      <input type="password" name="password" value={password} onChange={onChange} required placeholder="Password" />
      <select name="role" value={role} onChange={onChange}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;