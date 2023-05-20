import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyle';

export default function Login() {
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
      <button type="button">Enviar</button>
    </Container>
  );
}
