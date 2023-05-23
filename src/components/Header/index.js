import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const botaoClicado = useSelector((state) => state.botaoClicado);

  return (
    <Nav>
      {' '}
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={21} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt size={22} />
      </Link>
      {botaoClicado ? 'clicado' : 'não clicado'}
    </Nav>
  );
}
