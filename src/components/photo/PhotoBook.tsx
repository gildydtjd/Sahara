import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';

const PhotoBookBox = styled.div`
  padding: 20px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const bookData = [
  {
    url: '/assets/img/thumbnail1.jpg',
    title: 'Western Desert',
    info: 'The Sahara is a desert on the African continent.',
  },
  {
    url: '/assets/img/thumbnail5.jpg',
    title: 'Western Desert',
    info: 'The Sahara is a desert on the African continent.',
  },
  {
    url: '/assets/img/thumbnail2.jpg',
    title: 'Western Desert',
    info: 'The Sahara is a desert on the African continent.',
  },
  {
    url: '/assets/img/thumbnail4.jpg',
    title: 'Western Desert',
    info: 'The Sahara is a desert on the African continent.',
  },
];

function PhotoBook() {
  return (
    <>
      <PhotoBookBox>
        {bookData.map((data) => {
          return <Photo url={data.url} title={data.title} info={data.info} />;
        })}
      </PhotoBookBox>
    </>
  );
}

export default PhotoBook;
