import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const Challenges = styled.div`
  display: flex;
  flex-direction: column;

  button,
  a {
    margin-bottom: 20px;
  }
`;
