import React from 'react';
import styled from 'styled-components';

const SaharaBox = styled.div`
  background-image: url('/assets/img/sahara3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  height: 100vh;
`;

function Sahara() {
  return <SaharaBox></SaharaBox>;
}

export default Sahara;
