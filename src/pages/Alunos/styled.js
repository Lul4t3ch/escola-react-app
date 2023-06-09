import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #000;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;

export const ProfilePicture = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${colors.primaryColor};
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const NewStudent = styled(Link)`
  display: flex;
  padding: 15px 0 20px 0;
  align-items: center;
  justify-content: center;
`;
