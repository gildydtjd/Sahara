import React from 'react';
import styled from 'styled-components';
import Info from '../components/info/Info';

const SaharaBox = styled.div`
  ::before {
    content: ' ';
    display: block;
    background-image: url('/assets/img/sahara3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: -10; // This is pretty important.
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
