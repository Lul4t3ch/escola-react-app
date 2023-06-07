import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Table } from 'react-bootstrap';
import { Container } from '../../styles/GlobalStyle';
import axios from '../../services/axios';
import { ProfilePicture, Title, NewStudent } from './styled';
import Loading from '../../components/Loading';
import history from '../../services/history';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteQuestion = (e) => {
    e.preventDefault();
    const exclamationIcon = e.currentTarget.nextSibling;
    exclamationIcon.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDeletecomfirm = async (e, id, index) => {
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (error) {
      const staus = get(error, 'response.status', 0);

      if (staus === 401) {
        toast.error('You must log in first');
      } else {
        toast.error('Something went wrong! :(');
      }

      setIsLoading(false);
      history.push('/login');
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Alunos Matriculados</Title>
      <NewStudent to="/aluno/">Novo Aluno</NewStudent>
      <Table hover>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={String(aluno.id)}>
              <td>
                <ProfilePicture>
                  {get(aluno, 'Fotos[0].url', false) ? (
                    <img crossOrigin="" src={aluno.Fotos[0].url} />
                  ) : (
                    <FaUserCircle size={36} />
                  )}
                </ProfilePicture>
              </td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>
                <Link to={`/aluno/${aluno.id}/edit`}>
                  <FaEdit size={16} />
                </Link>
              </td>
              <td>
                <Link
                  onClick={handleDeleteQuestion}
                  to={`/aluno/${aluno.id}/delete`}
                >
                  <FaWindowClose size={16} />
                </Link>
                <FaExclamation
                  size={16}
                  display="none"
                  cursor="pointer"
                  onClick={(e) => handleDeletecomfirm(e, aluno.id, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
