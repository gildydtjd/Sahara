import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { neon } from '../../styles/style';
import PhotoBook from '../photo/PhotoBook';

const SaharaBox = styled.div`
  background-image: url('/assets/img/sahara3.png');
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 628px) {
    background-image: url('/assets/img/sahara6.jpg');
  }
`;

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
  @media screen and (max-width: 1524px) {
    height: 100%;
  }
`;

const LogoSpan = styled.span`
  animation: ${neon} 3s infinite alternate;
  margin: 0px 5%;
  cursor: pointer;
  font-size: 100px;
  padding: 10px 20px;

  @media screen and (max-width: 1524px) {
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
  @media screen and (max-width: 1524px) {
    display: none;
    transform: unset;
  }
`;

const InfoRight = styled.div`
  width: 50%;

  @media screen and (max-width: 1524px) {
    width: 100%;
    display: inline;
  }
`;
function Info() {
  return (
    <>
      <SaharaBox />
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
