import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from '../../styles/GlobalStyle';
import { Title, NewStudent } from './styled';

function BasicExample() {
  return (
    <Container>
      <Title>Alunos Matriculados</Title>
      <NewStudent to="/aluno/">Novo Aluno</NewStudent>

      <Table>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ricardo</td>
            <td>ricardo-sales@gmail.com</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Luis</td>
            <td>fernandinho@gmail.com</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fernando</td>
            <td>fernandinho@gmail.com</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fernando</td>
            <td>fernandinho@gmail.com</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td />
            <td> gemima</td>
            <td>gemima@gmail.com</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default BasicExample;
