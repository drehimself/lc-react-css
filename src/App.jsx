/** @jsxImportSource @emotion/react */

import React from 'react';
import './styles.css';
import { MyButton, MyContainer } from './App.styled';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const EmotionButton = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default function App() {
  return (
    <>
      <MyContainer>
        <MyButton bg="blue">My Button</MyButton>
        <MyButton bg="red">My Button</MyButton>
        <MyButton bg="green">My Button</MyButton>
        <div>
          <button
            css={css`
              padding: 32px;
              background-color: hotpink;
              font-size: 24px;
              border-radius: 4px;
              &:hover {
                color: red;
              }
            `}
          >
            Hover to change color.
          </button>
          <button
            css={{
              padding: '32px',
              backgroundColor: 'hotpink',
              fontSize: '24px',
              borderRadius: '4px',
            }}
          >
            Hover to change color.
          </button>
          <EmotionButton>My Emotion Button</EmotionButton>
        </div>
      </MyContainer>
    </>
  );
}
