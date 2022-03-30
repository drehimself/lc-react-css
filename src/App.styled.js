import styled from 'styled-components';

export const MyButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background: ${({ bg }) => bg};
  color: white;

  &:hover {
    background: red;
  }

  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const MyContainer = styled.div`
  margin: 20px auto;
  max-width: 600px;
`;
