import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';

const SaharaBox = styled.div`
  background-image: url('/assets/img/sahara3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

function Sahara() {
  return (
    <SaharaBox>
      <Header />
    </SaharaBox>
  );
}

export default Sahara;
