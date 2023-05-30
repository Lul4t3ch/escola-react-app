import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyle';
import { Form, Title } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const id = useSelector((state) => state.auth.user.id);
  const storedName = useSelector((state) => state.auth.user.nome);
  const storedEmail = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;
    setName(storedName);
    setEmail(storedEmail);
  }, [id, storedEmail, storedName]);

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

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Password length must be at least 6 characters long');
    }

    if (formErrors) return;
    dispatch(actions.registerRequest({ id, email, password, name }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Edit user info' : 'Create account'}</Title>
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

        <button type="submit">{id ? 'Save changes' : 'Sign Up'}</button>
      </Form>
    </Container>
  );
}
