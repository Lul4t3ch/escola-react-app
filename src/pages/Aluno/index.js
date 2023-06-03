import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyle';
import { Form, Title } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
        }
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validações no front para poupar recurso do back-end
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Name length must be at least 3 characters long');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error('Second name length must be at least 3 characters long');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid email adress');
    }

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('Age is not valid!');
    }

    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error('Weight is not valid!');
    }

    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error('Height is not valid!');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Your changes were saved');
      } else {
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Created successfully');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Something went wrong');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Edit Student info' : 'Create a new Student'}</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="student's name here"
          />
        </label>
        <label htmlFor="second-name">
          Second Name:
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="student's name here"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="best email"
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="student's age"
          />
        </label>
        <label htmlFor="weight">
          Weight:
          <input
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="(kg)"
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="(m)"
          />
        </label>

        <button type="submit">{id ? 'Save changes' : 'Confirm'}</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
