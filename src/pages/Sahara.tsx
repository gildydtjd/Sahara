import React from 'react';
import styled from 'styled-components';
import Info from '../components/info/Info';

const SaharaContainer = styled.div`
  height: 100%;
`;

function Sahara() {
  return (
    <SaharaContainer>
      <Info />
    </SaharaContainer>
  );
}

export default Sahara;
