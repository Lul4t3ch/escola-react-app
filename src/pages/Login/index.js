import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyle';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTÃO_CLICADO',
    });
  }

  return (
    <Container>
      <Title isRed>
        Login Page
        <small>Oi</small>
      </Title>
      <Paragraph>
        Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum
        Lorem Ipsum
      </Paragraph>
      <a href="#">Clique aqui</a>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
