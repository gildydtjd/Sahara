import React from 'react';
import styled from 'styled-components';

type photoData = {
  url: string;
  title: string;
  info: string;
};
interface photo {
  url: string;
}
const PhotoBox = styled.div`
  background-image: url(${(props: photo) => (props.url ? props.url : null)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 280px;
  height: 300px;
  border-radius: 10px;
  margin: 10px 15px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: translateY(-10px);
  }
  .photoInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    div {
      text-align: left;
    }
    span {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 5%;
    width: 80%;
    .photoInfo {
    }
  }
`;

function Photo({ url, title, info }: photoData) {
  return (
    <PhotoBox url={url}>
      <div className="photoInfo">
        <div>
          <h2>{title}</h2>
          <span>{info}</span>
        </div>
      </div>
    </PhotoBox>
  );
}

export default Photo;
