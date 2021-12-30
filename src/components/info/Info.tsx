import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { neon } from '../../styles/style';
import PhotoBook from '../photo/PhotoBook';

const InfoBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Alfa Slab One', cursive;
  font-family: 'Nanum Gothic', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  .logoDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media screen and (max-width: 768px) {
    display: block;
    height: 100%;
  }
`;

const LogoSpan = styled.span`
  animation: ${neon} 3s infinite alternate;
  margin: 0px 5%;
  cursor: pointer;
  font-size: 100px;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin: 0;
    padding: 0;
  }
`;

const InfoLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15% 0px 5% 10%;
  h2 {
    font-size: 130px;
    margin: 0;
    margin-bottom: 10px;
  }
  span {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const InfoRight = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
function Info() {
  return (
    <>
      <InfoBox>
        <div className="logoDiv">
          <LogoSpan {...useScrollFadeIn('left', 1, 0)}>SAHARA</LogoSpan>
        </div>
      </InfoBox>
      <InfoBox>
        <InfoLeft {...useScrollFadeIn('left', 1, 0)}>
          <div>
            <h2>Sahara</h2>
            <span>
              The desert comprises much of North Africa, excluding the fertile
              region on the Mediterranean Sea coast, the Atlas Mountains of the
              Maghreb, and the Nile Valley in Egypt and Sudan.
            </span>
          </div>
        </InfoLeft>
        <InfoRight {...useScrollFadeIn('right', 1, 0)}>
          <PhotoBook />
        </InfoRight>
      </InfoBox>
    </>
  );
}

export default Info;
