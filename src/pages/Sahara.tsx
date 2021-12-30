import React from 'react';
import styled from 'styled-components';
import Info from '../components/info/Info';

const SaharaBox = styled.div`
  background-image: url('/assets/img/sahara3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1524px) {
    background-attachment: fixed;
  }

  @media screen and (max-width: 628px) {
    background-attachment: fixed;
    background-image: url('/assets/img/sahara6.jpg');
  }
`;

function Sahara() {
  return (
    <SaharaBox>
      <Info />
    </SaharaBox>
  );
}

export default Sahara;
