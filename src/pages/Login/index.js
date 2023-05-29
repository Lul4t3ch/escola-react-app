import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
// import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyle';
import { Form, Title } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validações no front para poupar recurso do back-end
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid email adress');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Invalid Password');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
          />
        </label>
        <button type="submit">Sign in</button>
      </Form>
    </Container>
  );
}
