import { createGlobalStyle, styled } from 'styled-components';
import {
  errorColor,
  // errorColor,
  primaryColor,
  primaryDarkColor,
  successColor,
  // errorColor,
  // infoColor,
  // successColor,
  // warningColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }

 body{
  /* font-family: sans-serif; */
  background: ${primaryDarkColor};
  color: ${primaryDarkColor};

  td {
    vertical-align: middle;
  }
 }

 html, body, #root {
  height: 100%;
 }

 button {
  cursor: pointer;
  background: ${primaryColor};
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;
  font-size: 20px;
 }

 button:hover {
  filter: brightness(85%);
 }

 a {
  text-decoration: none;
  color:  ${primaryColor};
 }

 ul {
  list-style: none;
 }

 /* body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${successColor};
 }

 body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${errorColor};
 } */
`;

export const Container = styled.section`
  max-width: 540px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
