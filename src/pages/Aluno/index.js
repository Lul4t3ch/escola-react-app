import React, { useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyle';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  return (
    <Container>
      <h1>{id ? 'Edit Student info' : 'Create a new Student'}</h1>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
