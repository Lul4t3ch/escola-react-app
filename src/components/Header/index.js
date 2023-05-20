import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      {' '}
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaUserAlt size={21} />
      </a>
      <a href="">
        <FaSignInAlt size={22} />
      </a>
    </Nav>
  );
}
