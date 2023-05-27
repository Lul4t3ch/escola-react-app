import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyle';
import { Form, Title } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // validações no front para poupar recurso do back-end
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Name length must be at least 3 characters long');
      console.log(formErrors);
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid email adress');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Password length must be at least 6 characters long');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome: name,
        password,
        email,
      });
      toast.success('Account Created!');

      history.push('/login');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);

      errors.map((err) => toast.error(err));
    }
  }
  return (
    <Container>
      <Title>Create account</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name here"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your best email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="strong password"
          />
        </label>

        <button type="submit">Sign up</button>
      </Form>
    </Container>
  );
}
