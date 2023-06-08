import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  div {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
    background-attachment: fixed;
    background-size: cover;
  }

  span {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #555;
    border-top-color: ${colors.primaryColor};
    animation: loader-circle 1s linear infinite;
    z-index: 2;
  }

  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* span {
      z-index: 2;
    } */
`;
