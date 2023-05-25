import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyle';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
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
