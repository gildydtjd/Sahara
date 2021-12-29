import React from 'react';
import styled from 'styled-components';
import { neon } from '../../styles/style';

const HeaderBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Alfa Slab One', cursive;
  font-family: 'Nanum Gothic', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  span {
    animation: ${neon} 20s infinite alternate;
    margin: 0px 5%;
    cursor: pointer;
    font-size: 100px;
    padding: 10px 20px;
  }
`;
function Header() {
  return (
    <HeaderBox>
      <span>SAHARA</span>
    </HeaderBox>
  );
}

export default Header;
