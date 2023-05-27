import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Form, Title } from './styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Title>Login</Title>
      <Form>
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
